import axios from "../axios";
import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FetchUserSuccessAction,
  FetchUserFailureAction,
} from "./actionType";
import { IUser } from "../utilities/interfaces";
import { Dispatch } from "redux";

const fetchUsersSuccess = (users: IUser[]): FetchUserSuccessAction => ({
  type: FETCH_USERS_SUCCESS,
  users: users,
});

const fetchUsersFailure = (error: string): FetchUserFailureAction => ({
  type: FETCH_USERS_FAILURE,
  error: error,
});
export const fetchUsers = () => {
  return (dispatch: Dispatch) => {
    axios.get("/users").then(
      (response) => {
        dispatch(fetchUsersSuccess(response.data));
      },
      (error) => {
        dispatch(fetchUsersFailure(error.data));
      }
    );
  };
};
