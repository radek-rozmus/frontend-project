import {ActionNumberPayload} from '../types/Action';

export const CHANGE = 'CHANGE';
export const NEXT = 'NEXT';
export const PREVIOUS = 'PREVIOUS';

export const setPage = (page: number):ActionNumberPayload => ({
    type: CHANGE,
    payload: page
})
export const nextFewPages = (howMany: number):ActionNumberPayload  => ({
    type: NEXT,
    payload: howMany
})
export const previousFewPages = (howMany: number):ActionNumberPayload  => ({
    type: PREVIOUS,
    payload: howMany
})