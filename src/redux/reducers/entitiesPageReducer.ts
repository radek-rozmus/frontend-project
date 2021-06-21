import { AnyAction } from "redux";
import {
  SET_FILTER_CATEGORY,
  SET_ENTITIES,
  TOGGLE_ENTITIES_FULLSCREEN,
} from "../actions/entitiesPageActions";

export interface EntitiesPageState {
  filterCategory: string;
  entities: string[];
  fullscreen: boolean
}

const initialState = {
  filterCategory: "all",
  entities: [],
  fullscreen: false,
};

export const entitiesPageReducer = (
  state: EntitiesPageState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case SET_FILTER_CATEGORY:
      return { ...state, filterCategory: action.payload };
    case SET_ENTITIES:
      return { ...state, entities: action.payload };
    case TOGGLE_ENTITIES_FULLSCREEN:
      return { ...state, fullscreen: !state.fullscreen};
    default:
      return state;
  }
};
