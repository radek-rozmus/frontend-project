import {ActionStringPayload} from '../../models/types/Action';

export const EXPANDED_MENU_FILTER_CHANGE = 'EXTENDED_MENU_FILTER';
export const RESUME_WORK_FILTER_CHANGE = 'RESUME_WORK_FILTER_CHANGE';
export const ENTITIES_FILTER_CHANGE = 'ENTITIES_FILTER_CHANGE';

export const expandedMenuFilterChange = (change: string):ActionStringPayload => ({
    type: EXPANDED_MENU_FILTER_CHANGE,
    payload: change,
});

export const resumeWorkFilterChange = (change: string):ActionStringPayload  => ({
    type: RESUME_WORK_FILTER_CHANGE,
    payload: change,
})

export const entitiesFilterChange = (change: string):ActionStringPayload  => ({
    type: ENTITIES_FILTER_CHANGE,
    payload: change,
})