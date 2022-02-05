import { createSelector } from "reselect";
import { AppState, Post } from "./../../models/posts";

const getPostsState = (state: AppState) => state.postsState;

const convertTOLowerCaseWithNoSpaces = (str: string) =>
  str?.toLowerCase().replace(/\s+/g, "");

export const getFilteredPosts = createSelector(
  getPostsState,
  ({ posts, search }) => {
    if (!posts) return null;
    return posts.filter(
      (post: Post) =>
        convertTOLowerCaseWithNoSpaces(post?.title)?.includes(
          convertTOLowerCaseWithNoSpaces(search)
        ) ||
        convertTOLowerCaseWithNoSpaces(post?.description)?.includes(
          convertTOLowerCaseWithNoSpaces(search)
        )
    );
  }
);

export const getSinglePost = createSelector(
  getPostsState,
  ({ singlePost }) => singlePost
);

export const getLoading = createSelector(
  getPostsState,
  ({ loading }) => loading
);

export const getError = createSelector(getPostsState, ({ error }) => error);
