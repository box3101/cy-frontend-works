import React, { useState, useEffect } from 'react';
import './index.css';

function BrowserWork() {
  const [callStack, setCallStack] = useState([]);
  const [callbackQueue, setCallbackQueue] = useState([]);
  const [output, setOutput] = useState([]);
  const [isSimulating, setIsSimulating] = useState(false);

  const addToStack = (item) => {
    setCallStack(prevStack => [item, ...prevStack]);
  };

  const removeFromStack = () => {
    setCallStack(prevStack => prevStack.slice(1));
  };

  const addToQueue = (item) => {
    setCallbackQueue(prevQueue => [...prevQueue, item]);
  };

  const removeFromQueue = () => {
    setCallbackQueue(prevQueue => prevQueue.slice(1));
  };

  const addOutput = (message) => {
    setOutput(prevOutput => [...prevOutput, message]);
  };

  useEffect(() => {
    let timeoutId;
    if (isSimulating && callStack.length === 0 && callbackQueue.length > 0) {
      timeoutId = setTimeout(processEventLoop, 1000);
    }
    return () => clearTimeout(timeoutId);
  }, [isSimulating, callStack, callbackQueue]);

  const simulateEventLoop = () => {
    setIsSimulating(true);
    addToStack('main()');
    addOutput('main() 실행');

    setTimeout(() => {
      addToStack('setTimeout()');
      addOutput('setTimeout() 호출됨');
      
      setTimeout(() => {
        removeFromStack(); // setTimeout() 제거
        addToStack('console.log()');
        addOutput('콘솔 로그 출력');
        
        setTimeout(() => {
          removeFromStack(); // console.log() 제거
          removeFromStack(); // main() 제거
          addOutput('main() 완료');
          
          setTimeout(() => {
            addToQueue('setTimeout 콜백');
            addOutput('setTimeout 콜백 큐에 추가됨');
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  };

  const processEventLoop = () => {
    if (callStack.length === 0 && callbackQueue.length > 0) {
      const callback = callbackQueue[0];
      removeFromQueue();
      addToStack(callback);
      addOutput(`${callback} 콜 스택으로 이동`);

      setTimeout(() => {
        addOutput(`${callback} 실행`);
        
        setTimeout(() => {
          removeFromStack();
          addOutput(`${callback} 완료`);
          setIsSimulating(false);
        }, 1000);
      }, 1000);
    } else {
      setIsSimulating(false);
    }
  };

  const handleStart = () => {
    if (!isSimulating) {
      setCallStack([]);
      setCallbackQueue([]);
      setOutput([]);
      simulateEventLoop();
    }
  };

  return (
    <div className="browser">
      <div className="container">
        <div className="column">
          <h2>콜스택</h2>
          <div className="stack">
            {callStack.map((item, index) => (
              <div key={index} className="item">{item}</div>
            ))}
          </div>
          <button onClick={handleStart} disabled={isSimulating}>
            {isSimulating ? '실행 중...' : '시작'}
          </button>
        </div>
        <div className="column">
          <h2>콜백 큐</h2>
          <div className="queue">
            {callbackQueue.map((item, index) => (
              <div key={index} className="item">{item}</div>
            ))}
          </div>
        </div>
        <div className="column">
          <h2>출력</h2>
          <div className="output">
            {output.map((message, index) => (
              <p key={index}>{message}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowserWork;