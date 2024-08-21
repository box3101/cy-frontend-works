import React, { useEffect, useRef } from "react";
import "./index.css";

function BrowserWork() {
  const isSimulatingRef = useRef(false);

  useEffect(() => {
    const callStackEl = document.getElementById("callStack");
    const callbackQueueEl = document.getElementById("callbackQueue");
    const outputEl = document.getElementById("output");
    const startButton = document.getElementById("startButton");

    let callStack = [];
    let callbackQueue = [];

    function addToStack(item) {
      callStack.unshift(item);
      renderCallStack();
    }

    function removeFromStack() {
      callStack.shift();
      renderCallStack();
    }

    function addToQueue(item) {
      callbackQueue.push(item);
      renderCallbackQueue();
    }

    function removeFromQueue() {
      const item = callbackQueue.shift();
      renderCallbackQueue();
      return item;
    }

    function addOutput(message) {
      const p = document.createElement("p");
      p.textContent = message;
      outputEl.appendChild(p);
      outputEl.scrollTop = outputEl.scrollHeight;
    }

    function renderCallStack() {
      callStackEl.innerHTML = callStack.map(item => `<div class="item">${item}</div>`).join("");
    }

    function renderCallbackQueue() {
      callbackQueueEl.innerHTML = callbackQueue.map(item => `<div class="item">${item}</div>`).join("");
    }

    function simulateEventLoop() {
      if (isSimulatingRef.current) return;
      isSimulatingRef.current = true;
      startButton.disabled = true;
      startButton.textContent = "실행 중...";

      // Clear previous state
      callStack = [];
      callbackQueue = [];
      outputEl.innerHTML = "";
      renderCallStack();
      renderCallbackQueue();

      // Simulate main execution
      addToStack("main()");
      addOutput("main() 실행");

      // Simulate setTimeout calls
      setTimeout(() => {
        addOutput("setTimeout1() 호출됨");
        addToQueue("setTimeout1 콜백");
        addOutput("setTimeout1 콜백 큐에 추가됨");

        setTimeout(() => {
          addOutput("setTimeout2() 호출됨");
          addToQueue("setTimeout2 콜백");
          addOutput("setTimeout2 콜백 큐에 추가됨");

          setTimeout(() => {
            addOutput("setTimeout3() 호출됨");
            addToQueue("setTimeout3 콜백");
            addOutput("setTimeout3 콜백 큐에 추가됨");

            // Main execution finished
            removeFromStack(); // Remove main()
            addOutput("main() 완료");

            // Start processing the event loop
            processEventLoop();
          }, 2000);
        }, 2000);
      }, 2000);
    }

    function processEventLoop() {
      if (callbackQueue.length > 0) {
        const callback = removeFromQueue();
        addToStack(callback);
        addOutput(`${callback} 콜 스택으로 이동`);

        // Simulate callback execution
        setTimeout(() => {
          addOutput(`${callback} 실행`);
          removeFromStack();
          addOutput(`${callback} 완료`);

          // Continue processing the event loop
          processEventLoop();
        }, 1000);
      } else {
        // All callbacks processed
        isSimulatingRef.current = false;
        startButton.disabled = false;
        startButton.textContent = "시작";
      }
    }

    function handleStart() {
      if (!isSimulatingRef.current) {
        simulateEventLoop();
      }
    }

    startButton.addEventListener("click", handleStart);

    // Cleanup function
    return () => {
      startButton.removeEventListener("click", handleStart);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className='browser'>
      <div className='container'>
        <div className='column'>
          <h2>콜스택</h2>
          <div id='callStack' className='stack'></div>
          <button id='startButton'>시작</button>
        </div>
        <div className='column'>
          <h2>콜백 큐</h2>
          <div id='callbackQueue' className='queue'></div>
        </div>
        <div className='column'>
          <h2>출력</h2>
          <div id='output' className='output'></div>
        </div>
      </div>
    </div>
  );
}

export default BrowserWork;
