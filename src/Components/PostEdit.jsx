import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import Button from "./Button";

function PostEdit() {
  const { updatePost, getPostById } = usePosts();
  const navigate = useNavigate();
  const params = useParams();

  const currentPost = getPostById(params.id);
  if (!currentPost.content) navigate("/");
  const initialStateForm = {
    content: currentPost.content,
  };
  const [form, setForm] = useState(initialStateForm);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePost(params.id, form.content);
    navigate("/");
  };
  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <>
      <h3 className="text-3xl text-center mt-8">Редактировать пост</h3>
      <form
        onSubmit={handleSubmit}
        className="w-5/6 m-auto mt-4 border border-gray-200 shadow-md p-8"
      >
        <textarea
          required
          name="content"
          value={form.content}
          onChange={handleChange}
          className="w-full h-60 p-4 border border-gray-200"
        />
        <div className="flex space-x-4">
          <Button title="Отменить" func={(e) => handleCancel(e)} />
          <Button title="Сохранить" func={handleSubmit} />
        </div>
      </form>
    </>
  );
}

export default PostEdit;
