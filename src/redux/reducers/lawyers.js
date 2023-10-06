import { GET_LAWYERS, GET_LAWYER } from "../action";

const initialState = {
  content: [],
  isloading: true,
};

const getLawyers = (state = initialState, action) => {
  switch (action.type) {
    case GET_LAWYERS:
      return {
        ...state,
        content: action.payload,
      };
    case GET_LAWYER:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};
export default getLawyers;
