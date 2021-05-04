import { AnyAction } from "redux";
import { CHANGE, NEXT, PREVIOUS } from "../actions/resumeWorkActions";
//npm install --save react-redux @types/react-redux

export interface ResumeWorkState {
  page: number;
}

const initialState = {
  page: 1,
}


export const resumeWorkReducer = (state: ResumeWorkState = initialState, action: AnyAction) => {
  switch (action.type) {
    case CHANGE:
      return {...state, page: action.payload};
    case NEXT:
      return {...state, page: state.page + action.payload};
    case PREVIOUS:
      return {...state, page: state.page - action.payload};
    default:
      return state;
  }
};
