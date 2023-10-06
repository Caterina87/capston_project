// Url delle Fetch
const URL_LAWYERS = "https://my-api-epicode-ebc661be151d.herokuapp.com/lawyers";
const URL_LAWYER = "https://my-api-epicode-ebc661be151d.herokuapp.com/lawyers?id=";

// Costanti per le Action
export const GET_LAWYERS = "GET_LAWYERS";
export const GET_LAWYER = "GET_LAWYER";

// Action
// Lista di tutti gli avvocati
export const getLawyersFetch = () => {
  return async (dispatch, getState) => {
    const response = await fetch(URL_LAWYERS);
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: GET_LAWYERS, payload: data });
      //dispatch({ type: STOP_LOADING_PROFILE, payload: false });
    }
  };
};

// Chiamata per un specifico avvocato (i)
export const getLawyerFetch = (id) => {
  return async (dispatch, getState) => {
    const response = await fetch(URL_LAWYER + id);
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: GET_LAWYER, payload: data });
      //dispatch({ type: STOP_LOADING_PROFILE, payload: false });
    }
  };
};
