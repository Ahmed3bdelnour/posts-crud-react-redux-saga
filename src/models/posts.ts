export type AppState = {
  postsState: PostsState;
};

export type PostsState = {
  posts: Post[] | null;
  singlePost: Post | null;
  loading: boolean;
  error: string;
  search: "";
};

export type Post = {
  key: number;
  title: string;
  description: string;
};

export type PostResponse = {
  id: number;
  title: string;
  body: string;
};

export type EditPostPayload = Omit<Post, "key">;
