import React, { useEffect, useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      try {
        const response = await fetch("http://localhost:8080/posts");
        const resData = await response.json();
        setPosts(resData.posts);
        setIsFetching(false);
      } catch (err) {
        throw new Error("Data error occurred");
      }
    }
    fetchPosts();
  }, []);

  function addPostHandler(postsData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postsData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((existingPosts) => [postsData, ...existingPosts]);
  }

  return (
    <>
      {!isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post author={post.author} body={post.body} key={post.body} />
          ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default PostsList;
