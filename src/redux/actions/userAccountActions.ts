import {ActionUserPayload, ActionNumberPayload} from '../types/Action';
import {User} from '../types/User';

export const SET_USER = 'SET_USER';
export const ADD_FOLLOW = 'ADD_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

export const setUser = (user: User):ActionUserPayload => ({
    type: SET_USER,
    payload: user,
});
export const addFollow = (userFollowed: number):ActionNumberPayload => ({
    type: ADD_FOLLOW,
    payload: userFollowed,
});
export const removeFollow = (userUnfollowed: number):ActionNumberPayload => ({
    type: REMOVE_FOLLOW,
    payload: userUnfollowed,
});