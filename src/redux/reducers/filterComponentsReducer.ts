import { AnyAction } from "redux";
import { EXPANDED_MENU_FILTER_CHANGE, RESUME_WORK_FILTER_CHANGE } from "../actions/filterComponentsActions";


export interface FilterComponentsState {
  expandedMenuFilter: string,
  resumeWorkFilter: string,
}

const initialState = {
  expandedMenuFilter: "",
  resumeWorkFilter: "",
}


export const filterComponentsReducer = (state: FilterComponentsState = initialState, action: AnyAction) => {
  switch (action.type) {
    case EXPANDED_MENU_FILTER_CHANGE:
      return {...state, expandedMenuFilter: action.payload};
    case RESUME_WORK_FILTER_CHANGE:
      return {...state, resumeWorkFilter: action.payload};
    default:
      return state;
  }
};
