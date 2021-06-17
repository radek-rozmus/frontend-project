import { AnyAction } from "redux";
import {
  SET_USER,
  SET_USERS,
  ADD_FOLLOW,
  REMOVE_FOLLOW,
} from "../actions/userAccountActions";
import { User } from "../../models/types/User";

export interface UserAccountState {
  user: User;
  users: User[];
  followed: number[];
}

const initialState = {
  user: {
    id: undefined,
    name: undefined,
    company: undefined,
    city: undefined,
    email: undefined,
    phone: undefined,
  },
  users: [],
  followed: [],
};

export const userAccountReducer = (
  state: UserAccountState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_USERS:
      return { ...state, users: action.payload };
    case ADD_FOLLOW:
      return { ...state, followed: [...state.followed, action.payload] };
    case REMOVE_FOLLOW:
      const newFollowed = [...state.followed];
      newFollowed.splice(state.followed.indexOf(action.payload), 1);
      return { ...state, followed: newFollowed };
    default:
      return state;
  }
};
