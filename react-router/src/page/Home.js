import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        a tag Goto <a href="/products">the last of products</a>
        {/* 새로운 HTTP 요청을 서버에 전송후 페이지 다시 시작 */}
      </p>
      <p>
        Link Goto <Link to="/products">the last of products</Link>
        {/* 새로운 HTTP 요청을 방지하고자 Link를 이용해 페이지 이동한다. */}
      </p>
    </>
  );
};

export default HomePage;
