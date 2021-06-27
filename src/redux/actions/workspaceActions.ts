import {ActionStringPayload} from '../../models/types/Action';

export const SET_WORKSPACE = 'SET_WORKSPACE';

export const setWorkspace = (change: string):ActionStringPayload => ({
    type: SET_WORKSPACE,
    payload: change,
});