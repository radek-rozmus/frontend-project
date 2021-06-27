import { combineReducers } from 'redux';

import { resumeWorkReducer } from './resumeWorkReducer';
import { filterComponentsReducer } from './filterComponentsReducer';
import { userAccountReducer } from './userAccountReducer';
import { profilePageReducer } from './profilePageReducer';
import { postsReducer } from './postReducer';
import { entitiesPageReducer } from './entitiesPageReducer';
import { photosReducer } from './photosReducer';

export const rootReducer = combineReducers({
    resumeWork: resumeWorkReducer,
    filterComponents: filterComponentsReducer,
    userAccount: userAccountReducer,
    profile: profilePageReducer,
    posts: postsReducer,
    entities: entitiesPageReducer,
    photos: photosReducer,
});