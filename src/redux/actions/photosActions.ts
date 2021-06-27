import {ActionPhotosPayload} from '../../models/types/Action';
import { Photo } from '../../models/types/Photo';


export const SET_PHOTOS = 'SET_PHOTOS';

export const setPhotos = (posts: Photo[]):ActionPhotosPayload => ({
    type: SET_PHOTOS,
    payload: posts,
});