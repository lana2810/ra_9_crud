import React from "react";
import Post from "./Post";

function PostList({ items }) {
  return (
    <>
      {items.map((it) => (
        <Post key={it.id} {...it} />
      ))}
    </>
  );
}

export default PostList;
