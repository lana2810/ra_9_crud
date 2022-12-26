import React, { useContext, useState, useEffect } from "react";
import API from "../api";

const PostsContext = React.createContext();

export const usePosts = () => {
  return useContext(PostsContext);
};
const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    setLoading(true);
    API.getPosts().then((response) => {
      setPosts(response);
      setLoading(false);
    });
  }
  async function createPost(content) {
    await API.createUpdatePost({ ...content, id: 0 });
    loadData();
  }
  async function deletePost(id) {
    await API.deletePost(id);
    loadData();
  }
  async function updatePost(id, content) {
    await API.createUpdatePost({ id, content });
    loadData();
  }
  function getPostById(id) {
    const tmp = posts.find((post) => +post.id === +id);
    return tmp;
  }
  function toggleShowModal() {
    setShowModal((prev) => !prev);
  }
  return (
    <PostsContext.Provider
      value={{
        posts,
        createPost,
        loading,
        getPostById,
        deletePost,
        updatePost,
        showModal,
        toggleShowModal,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
export default PostsProvider;
