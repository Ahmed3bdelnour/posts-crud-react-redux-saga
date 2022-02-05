import {
  POSTS_FETCH_ERROR,
  POSTS_FETCH_START,
  POSTS_FETCH_SUCCESS,
  POSTS_SEARCH,
  POST_DELETE_START,
  POST_DELETE_SUCCESS,
  POST_EDIT_START,
  SINGLE_POST_FETCH_ERROR,
  SINGLE_POST_FETCH_START,
  SINGLE_POST_FETCH_SUCCESS,
} from "../constants/posts";
import { editPostPayload, Post } from "../../models/posts";

export type PostsFetchStartAction = { type: typeof POSTS_FETCH_START };

export type PostsFetchSuccessAction = {
  type: typeof POSTS_FETCH_SUCCESS;
  payload: { posts: Post[] };
};

export type PostsFetchErrorAction = {
  type: typeof POSTS_FETCH_ERROR;
  payload: { errorMessage: string };
};

export type PostsSearchAction = {
  type: typeof POSTS_SEARCH;
  payload: { search: string };
};

export type SinglePostFetchStartAction = {
  type: typeof SINGLE_POST_FETCH_START;
  payload: { key: number };
};

export type SinglePostFetchSuccessAction = {
  type: typeof SINGLE_POST_FETCH_SUCCESS;
  payload: { post: Post };
};

export type SinglePostFetchErrorAction = {
  type: typeof SINGLE_POST_FETCH_ERROR;
  payload: { errorMessage: string };
};

export type PostEditStartAction = {
  type: typeof POST_EDIT_START;
  payload: {
    key: number;
    data: editPostPayload;
    successCallback: () => void;
    errorCallback: () => void;
  };
};

export type PostDeleteStartAction = {
  type: typeof POST_DELETE_START;
  payload: {
    key: number;
    successCallback: () => void;
    errorCallback: () => void;
  };
};

export type PostDeleteSuccessAction = {
  type: typeof POST_DELETE_SUCCESS;
  payload: { key: number };
};

export type PostsAction =
  | PostsFetchStartAction
  | PostsFetchSuccessAction
  | PostsFetchErrorAction
  | SinglePostFetchStartAction
  | SinglePostFetchSuccessAction
  | SinglePostFetchErrorAction
  | PostEditStartAction
  | PostDeleteStartAction
  | PostDeleteSuccessAction
  | PostsSearchAction;
