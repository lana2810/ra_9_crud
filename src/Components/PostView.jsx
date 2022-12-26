import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import Post from "./Post";
import Button from "./Button";

function PostView() {
  const { getPostById } = usePosts();
  const params = useParams();
  const navigate = useNavigate();
  const tmp = getPostById(params.id);

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div className="p-8">
      <Button title="Назад" func={(e) => handleCancel(e)} />
      <Post {...tmp} />
    </div>
  );
}

export default PostView;
