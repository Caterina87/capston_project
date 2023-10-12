// Url delle Fetch
const URL_LAWYERS = "https://my-api-epicode-ebc661be151d.herokuapp.com/lawyers";
const URL_LAWYER = "https://my-api-epicode-ebc661be151d.herokuapp.com/lawyers?id=";
const URL_ARTICLES = "https://my-api-epicode-ebc661be151d.herokuapp.com/articles";

// Costanti per le Action
export const GET_LAWYERS = "GET_LAWYERS";
export const GET_LAWYER = "GET_LAWYER";
export const GET_ARTICLES = "GET_ARTICLES";
export const SELECTED_ARTICLE = "SELECTED_ARTICLE";

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

// Lista di tutti gli articoli
export const getArticlesFetch = () => {
  return async (dispatch, getState) => {
    const response = await fetch(URL_ARTICLES);
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: GET_ARTICLES, payload: data });
      //dispatch({ type: STOP_LOADING_PROFILE, payload: false });
    }
  };
};
