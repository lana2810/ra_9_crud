import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./Components/Main";
import PostNew from "./Components/PostNew";
import PostView from "./Components/PostView";
import PostEdit from "./Components/PostEdit";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />

      <Route path="posts">
        <Route index element={<Main />} />
        <Route path="new" element={<PostNew />} />
        <Route path=":id" element={<PostView />} />
        <Route path=":id/edit" element={<PostEdit />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
