import React, { useState } from "react";
import "./index.css";

function Await() {
  const [isSimulating, setIsSimulating] = useState(false);
  const [output, setOutput] = useState([]);

  const addOutput = (message) => {
    setOutput(prev => [...prev, message]);
  };

  const delay = (time) => {
    return new Promise((res) => setTimeout(res, time));
  };

  const simulateAsyncAwait = async () => {
    setIsSimulating(true);
    setOutput([]);

    addOutput("test() 실행 시작");

    addOutput("첫 번째 delay(2000) 시작");
    await delay(2000);
    addOutput("첫 번째 delay(2000) 완료");

    addOutput("두 번째 Promise 시작");
    await new Promise((res) => {
      setTimeout(() => {
        addOutput("2번째 동기화");
        res();
      }, 2000);
    });
    addOutput("두 번째 Promise 완료");

    addOutput("세 번째 setTimeout 시작");
    await new Promise(resolve => {
      setTimeout(() => {
        addOutput("3번째 동기화");
        resolve();
      }, 2000);
    });
    addOutput("세 번째 setTimeout 완료");

    addOutput("test() 실행 완료");

    setIsSimulating(false);
  };

  return (
    <div className="async-await-demo">
      <h2>Async/Await 실행 과정</h2>
      <div className="output">
        {output.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <button onClick={simulateAsyncAwait} disabled={isSimulating}>
        {isSimulating ? "실행 중..." : "시작"}
      </button>
    </div>
  );
}

export default Await;