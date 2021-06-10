import { ActionBooleanPayload } from '../types/Action';

export const TOGGLE_DATA_EDITING = 'TOGGLE_DATA_EDITING';
export const TOGGLE_DETAILS_EDITING = 'TOGGLE_DETAILS_EDITING';

export const toggleDataIsEditing = () => ({
    type: TOGGLE_DATA_EDITING,
});

export const toggleDetailsIsEditing = () => ({
    type: TOGGLE_DETAILS_EDITING,
});