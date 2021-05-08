import { combineReducers } from 'redux';

import { resumeWorkReducer } from './resumeWorkReducer';
import { filterComponentsReducer } from './filterComponentsReducer';
import { userAccountReducer } from './userAccountReducer';

export const rootReducer = combineReducers({
    resumeWork: resumeWorkReducer,
    filterComponents: filterComponentsReducer,
    userAccount: userAccountReducer,
});