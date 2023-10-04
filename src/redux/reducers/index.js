import { GET_LAWYERS } from "../action";

const initialState = {
  content: [],
};

const getLawyers = (state = initialState, action) => {
  switch (action.type) {
    case GET_LAWYERS:
      return {
        ...state,
        content: action.payload,
      };

    default:
      return state;
  }
};
export default getLawyers;
