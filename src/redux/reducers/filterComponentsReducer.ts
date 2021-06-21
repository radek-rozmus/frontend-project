import { AnyAction } from "redux";
import { ENTITIES_FILTER_CHANGE, EXPANDED_MENU_FILTER_CHANGE, RESUME_WORK_FILTER_CHANGE } from "../actions/filterComponentsActions";


export interface FilterComponentsState {
  expandedMenuFilter: string,
  resumeWorkFilter: string,
  entitiesFilter: string,
}

const initialState = {
  expandedMenuFilter: "",
  resumeWorkFilter: "",
  entitiesFilter: "",
}


export const filterComponentsReducer = (state: FilterComponentsState = initialState, action: AnyAction) => {
  switch (action.type) {
    case EXPANDED_MENU_FILTER_CHANGE:
      return {...state, expandedMenuFilter: action.payload};
    case RESUME_WORK_FILTER_CHANGE:
      return {...state, resumeWorkFilter: action.payload};
    case ENTITIES_FILTER_CHANGE:
      return {...state, entitiesFilter: action.payload};
    default:
      return state;
  }
};
