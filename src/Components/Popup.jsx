import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";

function Popup({ id }) {
  const { deletePost, toggleShowModal } = usePosts();
  const navigate = useNavigate();

  const handleCancel = (e) => {
    e.preventDefault();
    toggleShowModal();
    navigate("/");
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deletePost(id);
    toggleShowModal();
    navigate("/");
  };

  return (
    <div className="fixed inset-2/4 z-50 -translate-x-2/4 -translate-y-2/4 w-3/12 h-32 border border-gray-200 shadow-md p-4 bg-white flex flex-col">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Удалить пост?</h2>
      <div className="flex justify-between">
        <Button title="Да" func={(e) => handleDelete(e)} />
        <Button title="Нет" func={(e) => handleCancel(e)} />
      </div>
    </div>
  );
}

export default Popup;
