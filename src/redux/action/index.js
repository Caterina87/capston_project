// Url delle Fetch
const URL_LAWYERS = "https://my-api-epicode-ebc661be151d.herokuapp.com/lawyers";

// Costanti per le Action
export const GET_LAWYERS = "GET_LAWYERS";

// Action
export const getPostsFetch = () => {
  return async (dispatch, getState) => {
    const response = await fetch(URL_LAWYERS);
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: GET_LAWYERS, payload: data });
      //dispatch({ type: STOP_LOADING_PROFILE, payload: false });
    }
  };
};
