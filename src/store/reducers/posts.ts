import {
  POSTS_FETCH_START,
  POSTS_FETCH_ERROR,
  POSTS_SEARCH,
  SINGLE_POST_FETCH_SUCCESS,
  SINGLE_POST_FETCH_START,
  SINGLE_POST_FETCH_ERROR,
  POST_DELETE_SUCCESS,
  POSTS_FETCH_SUCCESS,
} from "../constants/posts";
import {
  PostDeleteSuccessAction,
  PostsAction,
  PostsFetchErrorAction,
  PostsFetchSuccessAction,
  PostsSearchAction,
  SinglePostFetchErrorAction,
  SinglePostFetchSuccessAction,
} from "../actions-types/posts";
import { PostsState } from "./../../models/posts";

const INITIAL_STATE: PostsState = {
  posts: null,
  singlePost: null,
  loading: false,
  error: "",
  search: "",
};

const handlePostsFetch = (state: PostsState) => {
  return {
    ...state,
    loading: true,
    error: "",
    posts: null,
    singlePost: null,
    search: "",
  };
};

const handleSinglePostFetch = (state: PostsState) => {
  return { ...state, loading: true, error: "", posts: null, singlePost: null };
};

const handlePostsAdd = (state: PostsState, action: PostsFetchSuccessAction) => {
  return {
    ...state,
    posts: action.payload.posts,
    loading: false,
    error: "",
  };
};

const handleError = (
  state: PostsState,
  action: PostsFetchErrorAction | SinglePostFetchErrorAction
) => {
  return { ...state, loading: false, error: action.payload.errorMessage };
};

const handlePostsSearch = (state: PostsState, action: PostsSearchAction) => {
  return { ...state, search: action.payload.search };
};

const handleSinglePostAdd = (
  state: PostsState,
  action: SinglePostFetchSuccessAction
) => {
  return {
    ...state,
    singlePost: action.payload.post,
    loading: false,
    error: "",
  };
};

const handleDeletePost = (
  state: PostsState,
  action: PostDeleteSuccessAction
) => {
  const updatedPosts = [...state.posts!];
  const indexToDelete = updatedPosts.findIndex(
    (p) => p.key === action.payload.key
  );
  updatedPosts.splice(indexToDelete, 1);

  return { ...state, loading: false, error: "", posts: updatedPosts };
};

function PostsReducer(state = INITIAL_STATE, action: PostsAction) {
  switch (action.type) {
    case POSTS_FETCH_START:
      return handlePostsFetch(state);

    case SINGLE_POST_FETCH_START:
      return handleSinglePostFetch(state);

    case POSTS_FETCH_SUCCESS:
      return handlePostsAdd(state, action);

    case SINGLE_POST_FETCH_SUCCESS:
      return handleSinglePostAdd(state, action);

    case POST_DELETE_SUCCESS:
      return handleDeletePost(state, action);

    case POSTS_FETCH_ERROR:
    case SINGLE_POST_FETCH_ERROR:
      return handleError(state, action);

    case POSTS_SEARCH:
      return handlePostsSearch(state, action);

    default:
      return state;
  }
}

export default PostsReducer;
