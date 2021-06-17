import { AnyAction } from "redux";
import { Post } from "../../models/types/Post";
import {
  SET_POSTS
} from "../actions/postsActions";

export interface PostsState {
  posts: Post[]
}

const initialState = {
  posts: [],
};

export const postsReducer = (
  state: PostsState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
};
