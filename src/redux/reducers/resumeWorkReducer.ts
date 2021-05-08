import { AnyAction } from "redux";
import { SET_PAGE, NEXT_PAGE, PREVIOUS_PAGE, SET_FILTER_FOLLOWED} from "../actions/resumeWorkActions";
//npm install --save react-redux @types/react-redux

export interface ResumeWorkState {
  page: number;
  numberOfPages: number;
  filterFollowed: boolean;
}

const initialState = {
  page: 1,
  numberOfPages: 0,
  filterFollowed: false,
}


export const resumeWorkReducer = (state: ResumeWorkState = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_PAGE:
      return {...state, page: action.payload};
    case NEXT_PAGE:
      return {...state, page: state.page + action.payload};
    case PREVIOUS_PAGE:
      return {...state, page: state.page - action.payload};
    case SET_FILTER_FOLLOWED:
      return {...state, filterFollowed: action.payload};
    default:
      return state;
  }
};
