import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  UserActionTypes,
} from "./actionType";
import { UsersState } from "../utilities/interfaces";

const initialState: UsersState = {
  users: [],
  error: null,
};

export default (state = initialState, action: UserActionTypes): UsersState => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: [...action.users],
        error: null,
      };
    case FETCH_USERS_FAILURE:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
