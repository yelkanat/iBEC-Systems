import { IUser } from "../utilities/interfaces";

export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export interface FetchUserSuccessAction {
  type: typeof FETCH_USERS_SUCCESS;
  users: IUser[] | [];
}

export interface FetchUserFailureAction {
  type: typeof FETCH_USERS_FAILURE;
  error: string;
}
export type UserActionTypes = FetchUserSuccessAction | FetchUserFailureAction;
