import {
  POSTS_FETCH_START,
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_ERROR,
  POSTS_SEARCH,
  SINGLE_POST_FETCH_START,
  SINGLE_POST_FETCH_SUCCESS,
  SINGLE_POST_FETCH_ERROR,
  POST_EDIT_START,
  POST_DELETE_START,
  POST_DELETE_SUCCESS,
} from "../constants/posts";
import { EditPostPayload, Post } from "./../../models/posts";

export const postsFetchStart = () => ({ type: POSTS_FETCH_START });

export const postsFetchSuccess = (posts: Post[]) => ({
  type: POSTS_FETCH_SUCCESS,
  payload: { posts },
});

export const postsFetchError = (errorMessage: string) => ({
  type: POSTS_FETCH_ERROR,
  payload: { errorMessage },
});

export const postsSearch = (value: string) => ({
  type: POSTS_SEARCH,
  payload: { search: value },
});

export const singlePostFetchStart = (key?: number) => ({
  type: SINGLE_POST_FETCH_START,
  payload: { key },
});

export const singlePostFetchSuccess = (post: Post) => ({
  type: SINGLE_POST_FETCH_SUCCESS,
  payload: { post },
});

export const singlePostFetchError = (errorMessage: string) => ({
  type: SINGLE_POST_FETCH_ERROR,
  payload: { errorMessage },
});

export const postEditStart = (
  key: number,
  data: EditPostPayload,
  successCallback: () => void,
  errorCallback: () => void
) => ({
  type: POST_EDIT_START,
  payload: { key, data, successCallback, errorCallback },
});

export const postDeleteStart = (
  key: number,
  successCallback: () => void,
  errorCallback: () => void
) => ({
  type: POST_DELETE_START,
  payload: { key, successCallback, errorCallback },
});

export const deletePostSuccess = (key: number) => ({
  type: POST_DELETE_SUCCESS,
  payload: { key },
});
