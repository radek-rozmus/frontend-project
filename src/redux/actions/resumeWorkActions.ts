import {ActionNumberPayload, ActionBooleanPayload} from '../../models/types/Action';

export const SET_PAGE = 'SET_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREVIOUS_PAGE = 'PREVIOUS_PAGE';
export const SET_FILTER_FOLLOWED = 'SET_FILTER_FOLLOWED';


export const setPage = (page: number):ActionNumberPayload => ({
    type: SET_PAGE,
    payload: page
})
export const nextFewPages = (howMany: number):ActionNumberPayload  => ({
    type: NEXT_PAGE,
    payload: howMany
})
export const previousFewPages = (howMany: number):ActionNumberPayload  => ({
    type: PREVIOUS_PAGE,
    payload: howMany
})
export const setFilterFollowed = (newValue: boolean):ActionBooleanPayload  => ({
    type: SET_FILTER_FOLLOWED,
    payload: newValue
})