import {ActionStringPayload, ActionStringArrayPayload} from '../../models/types/Action';

export const SET_FILTER_CATEGORY = 'SET_FILTER_CATEGORY';
export const SET_ENTITIES = 'SET_ENTITIES';
export const TOGGLE_ENTITIES_FULLSCREEN = 'TOGGLE_ENTITIES_FULLSCREEN';

export const setFilterCategory = (filter: 'all' | 'my' | 'followed'): ActionStringPayload => ({
    type: SET_FILTER_CATEGORY,
    payload: filter
})

export const setEntities = (entities: string[]): ActionStringArrayPayload => ({
    type: SET_ENTITIES,
    payload: entities
})

export const toggleEntitiesFullscreen = () => ({
    type: TOGGLE_ENTITIES_FULLSCREEN
})