import React from "react";
import FormatedDate from "./FormatedDate";
import Popup from "./Popup";
import { PencilAltIcon, XIcon } from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";

function Post({ id, content, created }) {
  const { showModal, toggleShowModal } = usePosts();
  const navigate = useNavigate();

  const handleDelete = (e, id) => {
    e.preventDefault();
    toggleShowModal();
  };
  const handleEdit = (e, id) => {
    e.preventDefault();
    navigate(`/posts/${id}/edit`);
  };
  return (
    <>
      {showModal && <Popup id={id} />}
      <Link to={`/posts/${id}`}>
        <div className="relative w-5/6 m-auto mt-4 border border-gray-200 shadow-md p-8">
          <img
            src="https://i.pravatar.cc/40"
            alt="foto-user"
            className="h-16 w-16 rounded-full inline-block mr-4 mb-4"
          />
          <span className="font-medium text-gray-900">Иван Иванов</span>
          <PencilAltIcon
            className="h-7 absolute right-8 top-0"
            onClick={(e) => handleEdit(e, id)}
          />
          <XIcon
            onClick={(e) => handleDelete(e)}
            className="h-7 absolute right-0 top-0"
          />
          <div className="break-words"> {content}</div>
          <FormatedDate value={created} />
        </div>
      </Link>
    </>
  );
}

export default Post;
