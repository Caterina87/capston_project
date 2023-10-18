import { GET_USER } from "../action";

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload[0],
      };

    default:
      return state;
  }
};
export default userReducer;
