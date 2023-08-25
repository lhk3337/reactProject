import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  console.log("APP RUNNING");
  const toggleParagraphHandler = useCallback(() => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {showParagraph && <p>This is new!</p>} */}
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toogle Pragraph!</Button>
    </div>
  );
}

export default App;
/**
 * * 자식 컴포넌트 재평가
 * * 부모 컴포넌트의 상태가 변경되면 재실행 되는데 이때 자식 컴포넌트도 재실행 된다.
 *  * 이유는 자식 컴포넌트는 return문 안에 JSX형태로 있고 이것을 다시 함수 호출처럼 실행한다.
 */
