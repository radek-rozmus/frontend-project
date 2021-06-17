import {ActionPostsPayload} from '../../models/types/Action';
import { Post } from '../../models/types/Post';


export const SET_POSTS = 'SET_POSTS';

export const setPosts = (posts: Post[]):ActionPostsPayload => ({
    type: SET_POSTS,
    payload: posts,
});