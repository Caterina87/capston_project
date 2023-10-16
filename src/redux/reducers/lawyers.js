import { GET_LAWYERS, GET_LAWYER, STOP_LOADING_LAWYERS } from "../action";

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
    case STOP_LOADING_LAWYERS:
      return {
        ...state,
        isloading: false,
      };

    default:
      return state;
  }
};
export default getLawyers;
