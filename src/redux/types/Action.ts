import{ User } from './User';

export type ActionNumberPayload = { type: string; payload: number };
export type ActionStringPayload = { type: string; payload: string };
export type ActionUserPayload = { type: string; payload: User };
export type ActionBooleanPayload = { type: string; payload: boolean };
