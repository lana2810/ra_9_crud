import React from "react";
import { Link } from "react-router-dom";
import PostList from "./PostList";
import { usePosts } from "../hooks/usePosts";

function Main() {
  const { loading, posts } = usePosts();
  return (
    <>
      <header aria-label="Page Header">
        <div className="mx-auto p-4 flex justify-end bg-gray-100 ">
          <Link to="/posts/new">
            <button
              type="button"
              className="h-10 px-6 font-semibold rounded-md bg-gray-500 text-white"
            >
              Добавить пост
            </button>
          </Link>
        </div>
      </header>
      {!loading && <PostList items={posts} />}
    </>
  );
}

export default Main;
