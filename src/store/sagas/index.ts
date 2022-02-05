import { takeEvery, all } from "redux-saga/effects";
import {
  POSTS_FETCH_START,
  SINGLE_POST_FETCH_START,
  POST_EDIT_START,
  POST_DELETE_START,
} from "../constants/posts";
import {
  handleFetchPosts,
  handleFetchSinglePost,
  handleEditPost,
  handleDeletePost,
} from "./posts";

function* rootSaga() {
  yield all([
    takeEvery(POSTS_FETCH_START, handleFetchPosts),
    takeEvery(SINGLE_POST_FETCH_START, handleFetchSinglePost),
    takeEvery(POST_EDIT_START, handleEditPost),
    takeEvery(POST_DELETE_START, handleDeletePost),
  ]);
}

export default rootSaga;
