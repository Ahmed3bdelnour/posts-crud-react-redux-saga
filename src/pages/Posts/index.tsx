import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredPosts } from "../../store/selectors/posts";
import { postsFetchStart } from "../../store/actions/posts";
import { PostsSearch } from "./../../components/PostsSearch";
import { PostsTable } from "./../../components/PostsTable";
import "./style.scss";

const MemoizedPostsSearch = memo(PostsSearch);

export const Posts = () => {
  const posts = useSelector(getFilteredPosts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsFetchStart());
  }, [dispatch]);

  if (!posts) return null;

  return (
    <div className="posts-container">
      <MemoizedPostsSearch />
      <PostsTable posts={posts} />
    </div>
  );
};
