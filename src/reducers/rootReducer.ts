import { combineReducers } from 'redux';

import { resumeWorkReducer } from './resumeWorkReducer';

export const rootReducer = combineReducers({
    resumeWork: resumeWorkReducer,
});