import { AnyAction } from "redux";
import { Photo } from "../../models/types/Photo";
import { SET_PHOTOS } from "../actions/photosActions";

export interface PhotosState {
  photos: Photo[];
}

const initialState = {
  photos: [],
};

export const photosReducer = (
  state: PhotosState = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case SET_PHOTOS:
      return { ...state, photos: action.payload };
    default:
      return state;
  }
};
