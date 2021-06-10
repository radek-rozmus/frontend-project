import { combineReducers } from 'redux';

import { resumeWorkReducer } from './resumeWorkReducer';
import { filterComponentsReducer } from './filterComponentsReducer';
import { userAccountReducer } from './userAccountReducer';
import { profilePageReducer } from './profilePageReducer';

export const rootReducer = combineReducers({
    resumeWork: resumeWorkReducer,
    filterComponents: filterComponentsReducer,
    userAccount: userAccountReducer,
    profile: profilePageReducer,
});