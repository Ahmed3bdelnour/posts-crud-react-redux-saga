import { Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import { Posts } from "./pages/Posts";
import { EditPost } from "./pages/EditPost";
import { NotFound } from "./pages/NotFound";
import { ErrorMessage } from "./components/ErrorMessage";
import { Loading } from "./components/Loading";

function App() {
  return (
    <div className="App">
      <ErrorMessage />
      <Loading />

      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:postKey/edit" element={<EditPost />} />
        <Route path="/" element={<Navigate to="/posts" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
