import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";
import Button from "./Button";

function PostNew() {
  const { createPost } = usePosts();
  const navigate = useNavigate();
  const initialStateForm = {
    content: "",
  };
  const [form, setForm] = useState(initialStateForm);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setForm(initialStateForm);
    createPost(form);
    navigate("/");
  };
  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <>
      <h3 className="text-3xl text-center mt-8">Новый пост</h3>
      <form
        onSubmit={handleSubmit}
        className="w-5/6 m-auto mt-4 border border-gray-200 shadow-md p-8"
      >
        <textarea
          required
          name="content"
          value={form.content}
          onChange={handleChange}
          spellCheck="false"
          className="w-full h-30 p-4 mb-4 border border-gray-200 outline-0"
        />
        <div className="flex space-x-4">
          <Button title="Отменить" func={(e) => handleCancel(e)} />
          <Button title="Опубликовать" func={handleSubmit} />
        </div>
      </form>
    </>
  );
}

export default PostNew;
