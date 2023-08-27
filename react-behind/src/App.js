import React, { useState, useCallback, useMemo } from "react";
import Button from "./components/UI/Button/Button";
import DemoList from "./components/Demo/DemoList";
import "./App.css";

function App() {
  const [listTitle, setListTitle] = useState("My List");

  const changeTitleHandler = useCallback(() => {
    setListTitle("New Title");
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;
/**
 * * 자식 컴포넌트 재평가
 * * 부모 컴포넌트의 상태가 변경되면 재실행 되는데 이때 자식 컴포넌트도 재실행 된다.
 *  * 이유는 자식 컴포넌트는 return문 안에 JSX형태로 있고 이것을 다시 함수 호출처럼 실행한다.
 */

/**
 * * useCallback() 의존성 배열
 * * useCallback에 의존성 배열을 설정하지 않으면 useCallback안의 상태값이 변경 되었다 할지라도 그 값은 처음 실행된 시점의 값을 저장하고 재평가 하지 않는다.
 * * 하지만 의존성 배열에 변경되는 상태값을 설정하면 그 상태값이 변경되면 변경된 값으로 저장되며 재평가를 실시하게 된다. 만일 상태값이 변경하지 않으면 재평가는 실시하지 않는다.
 */
