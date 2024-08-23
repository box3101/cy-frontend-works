import React, { useState, useEffect, useRef } from "react";
import "./index.css";

function PromiseVisualization() {
  const [status, setStatus] = useState("pending");
  const [output, setOutput] = useState([]);
  const [isSimulating, setIsSimulating] = useState(false);
  const outputRef = useRef(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  const addOutput = (message) => {
    setOutput((prev) => [...prev, message]);
  };

  const simulatePromise = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setStatus("pending");
    setOutput([]);

    addOutput("Promise 생성됨");
    addOutput("상태: Pending");

    const randomDelay = Math.floor(Math.random() * 3000) + 1000; // 1-4초 사이의 랜덤 딜레이

    new Promise((resolve, reject) => {
      addOutput(`${randomDelay}ms 후 결과 반환 예정`);
      
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("성공!");
        } else {
          reject("실패!");
        }
      }, randomDelay);
    })
      .then((result) => {
        setStatus("fulfilled");
        addOutput("상태: Fulfilled");
        addOutput(`결과: ${result}`);
      })
      .catch((error) => {
        setStatus("rejected");
        addOutput("상태: Rejected");
        addOutput(`에러: ${error}`);
      })
      .finally(() => {
        addOutput("Promise 처리 완료");
        setIsSimulating(false);
      });
  };

  return (
    <div className="promise-container">
      <h1>Promise 시각화</h1>
      <div className="promise-status">
        <div className={`status-indicator ${status}`}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </div>
      </div>
      <button onClick={simulatePromise} disabled={isSimulating}>
        {isSimulating ? "실행 중..." : "Promise 시작"}
      </button>
      <div className="output" ref={outputRef}>
        {output.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
      </div>
    </div>
  );
}

export default PromiseVisualization;