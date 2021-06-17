import { AnyAction } from "redux";
import {
  TOGGLE_DATA_EDITING,
  TOGGLE_DETAILS_EDITING,
} from "../actions/profilePageActions";

export interface ProfilePageState {
  isDataEditing: boolean;
  isDetailsEditing: boolean;
  proposals: Array<Array<string>>;
  reviews: Array<Array<string>>;
  fees: Array<Array<string>>;
}

const initialState = {
  isDataEditing: false,
  isDetailsEditing: false,

  proposals: [['Operation 1', 'Renault', 'France', '#Tax', '20/01/2018', 'Racine'],
  ['Operation 2', 'Renault', 'USA', '#M&A', '18/02/2019', 'Clifford chance'],
  ['Operation 3', 'Renault', 'Italia', '#Social', '18/02/2019', 'SVZ']],

  reviews: [['Operation 1', 'Renault', 'France', '#Tax', '20/01/2018'],
  ['Operation 2', 'Renault', 'USA', '#M&A', '18/02/2019'],
  ['Operation 3', 'Renault', 'Italia', '#Social', '18/02/2019']],

  fees: [['2019', 'CS 153', '3 500$', 'Clifford chance'],
  ['2018', 'CS 153', '9 500$', 'Linklaters'],
  ['2017', 'CS 47', '10 500$', 'Linklaters'],
  ['', 'CS 153', '18 500$', 'Linklaters'],
  ['', 'CS 32', '15 500$', '#Linklaters']],
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
