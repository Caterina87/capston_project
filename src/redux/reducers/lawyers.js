import { GET_LAWYERS, GET_LAWYER } from "../action";

const initialState = {
  content: [],
  isloading: true,
  lawyer: null,
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
        lawyer: action.payload[0],
      };

    default:
      return state;
  }
};
export default getLawyers;
