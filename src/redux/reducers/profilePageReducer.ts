import { AnyAction } from "redux";
import {
  TOGGLE_DATA_EDITING,
  TOGGLE_DETAILS_EDITING,
} from "../actions/profilePageActions";

export interface ProfilePageState {
  isDataEditing: boolean;
  isDetailsEditing: boolean;
}

const initialState = {
  isDataEditing: false,
  isDetailsEditing: false,
};

export const profilePageReducer = (
  state: ProfilePageState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case TOGGLE_DATA_EDITING:
      const newDataIsEditing = !state.isDataEditing;
      return { ...state, isDataEditing: newDataIsEditing };
    case TOGGLE_DETAILS_EDITING:
      const newDetailsIsEditing = !state.isDetailsEditing;
      return { ...state, isDetailsEditing: newDetailsIsEditing };
    default:
      return state;
  }
};
