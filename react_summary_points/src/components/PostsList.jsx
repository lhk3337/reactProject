import React, { useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
const PostsList = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function hideModalHandler() {
    setIsModalVisible(false);
  }

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }
  function AuthorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {isModalVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={AuthorChangeHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Manual" body="Check out the full course!" />
      </ul>
    </>
  );
};

export default PostsList;
