import { AnyAction } from "redux";
import { SET_WORKSPACE } from "../actions/workspaceActions";
//npm install --save react-redux @types/react-redux

export interface WorkspacesState {
  workspace: string;
}

const initialState = {
  workspace: "Client contract",
}


export const workspacesReducer = (state: WorkspacesState = initialState, action: AnyAction) => {
  switch (action.type) {
    case SET_WORKSPACE:
      return {...state, workspace: action.payload};
    default:
      return state;
  }
};
