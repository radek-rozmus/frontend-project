import {ActionStringPayload, ActionStringArrayPayload} from '../../models/types/Action';

export const SET_FILTER_CATEGORY = 'SET_FILTER_CATEGORY';
export const SET_ENTITIES = 'SET_ENTITIES';
export const TOGGLE_ENTITIES_FULLSCREEN = 'TOGGLE_ENTITIES_FULLSCREEN';
export const TOGGLE_ENTITIES_SORT = 'TOGGLE_ENTITIES_SORT';
export const CHANGE_ENTITIES_DISPLAY_STYLE = 'CHANGE_ENTITIES_DISPLAY_STYLE';
export const TOGGLE_ENTITIES_SUBMENU = 'TOGGLE_ENTITIES_SUBMENU';

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

export const toggleEntitiesSort = () => ({
    type: TOGGLE_ENTITIES_SORT
})
export const changeEntitiesDisplayStyle = () => ({
    type: CHANGE_ENTITIES_DISPLAY_STYLE
})
export const toggleEntitiesSubmenu = () => ({
    type: TOGGLE_ENTITIES_SUBMENU
})
