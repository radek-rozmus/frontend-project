import { Photo } from './Photo';
import { Post } from './Post';
import{ User } from './User';

export type ActionNumberPayload = { type: string; payload: number };
export type ActionStringPayload = { type: string; payload: string };
export type ActionStringArrayPayload = { type: string; payload: string[] };
export type ActionUserPayload = { type: string; payload: User };
export type ActionUsersArrayPayload = { type: string; payload: User[] };
export type ActionBooleanPayload = { type: string; payload: boolean };
export type ActionPostsPayload= { type: string; payload: Post[] };
export type ActionPhotosPayload= { type: string; payload: Photo[] };
