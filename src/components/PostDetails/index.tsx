import { Post } from "../../models/posts";

type props = {
  post?: Post;
};

export const PostDetails = ({ post }: props) => {
  if (!post) return null;

  return (
    <div>
      <p>Post Key: {post.key}</p>
      <p>Post Title: {post.title}</p>
      <p>Post Description: {post.description}</p>
    </div>
  );
};
