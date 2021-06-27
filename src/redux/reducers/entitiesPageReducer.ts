import { AnyAction } from "redux";
import { DisplayStyle } from "../../models/enums/DisplayStyle";
import {
  SET_FILTER_CATEGORY,
  SET_ENTITIES,
  TOGGLE_ENTITIES_FULLSCREEN,
  TOGGLE_ENTITIES_SORT,
  CHANGE_ENTITIES_DISPLAY_STYLE,
  TOGGLE_ENTITIES_SUBMENU,
} from "../actions/entitiesPageActions";

export interface EntitiesPageState {
  filterCategory: string;
  entities: string[];
  fullscreen: boolean;
  isSorted: boolean;
  displayStyle: DisplayStyle;
  isSubmenuOpen: boolean;
}

const initialState = {
  filterCategory: "all",
  entities: [],
  fullscreen: false,
  isSorted: false,
  displayStyle: DisplayStyle.mozaic,
  isSubmenuOpen: false
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
      return { ...state, fullscreen: !state.fullscreen };
    case TOGGLE_ENTITIES_SORT:
      return { ...state, isSorted: !state.isSorted };
    case CHANGE_ENTITIES_DISPLAY_STYLE:
      let newStyle: DisplayStyle;
        if(state.displayStyle === DisplayStyle.mozaic) newStyle = DisplayStyle.list;
        else newStyle = DisplayStyle.mozaic;
      return { ...state, displayStyle: newStyle };
      case TOGGLE_ENTITIES_SUBMENU:
      return { ...state, isSubmenuOpen: !state.isSubmenuOpen };
    default:
      return state;
  }
};
