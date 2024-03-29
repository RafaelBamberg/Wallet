import { SET_USERS } from '../actions/index';

const INITIAL_STATE = {
  email: '',
  password: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SET_USERS:
    return { ...state,
      email: action.payload };
  default:
    return state;
  }
};

export default userReducer;
