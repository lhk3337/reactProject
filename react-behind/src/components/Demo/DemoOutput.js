import React, { memo } from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = ({ show }) => {
  console.log("DemoOutput RUNNING");
  return <MyParagraph>{show ? "This is new!" : ""}</MyParagraph>;
};

export default memo(DemoOutput);

/**
 * memo
 * * memo는 props 값에서 원시값(number, string, boolean)등에 대해 이전 값과 상태가 변경된 값이 같으면 재평가를 하지 않는다.
 * * 하지만 memo는 함수 객체 배열 같은 참조값들은 재평가를 하지 못한다.
 */
