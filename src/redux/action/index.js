// Url delle Fetch
const URL_LAWYERS = "https://my-api-epicode-ebc661be151d.herokuapp.com/lawers";
const URL_LAWYER = "https://my-api-epicode-ebc661be151d.herokuapp.com/lawyers?id=";
const URL_ARTICLES = "https://my-api-epicode-ebc661be151d.herokuapp.com/articles";
const URL_APPOINTMENTS = "https://my-api-epicode-ebc661be151d.herokuapp.com/appointments";
const URL_USER = "https://my-api-epicode-ebc661be151d.herokuapp.com/users?username=";

// Costanti per le Action
export const GET_LAWYERS = "GET_LAWYERS";
export const GET_LAWYER = "GET_LAWYER";
export const GET_ARTICLES = "GET_ARTICLES";
export const SELECTED_ARTICLE = "SELECTED_ARTICLE";
export const STOP_LOADING_LAWYERS = "STOP_LOADING_LAWYERS";
export const STOP_LOADING_LAWYER = "STOP_LOADING_LAWYER";
export const STOP_LOADING_ARTICLES = "STOP_LOADING_ARTICLES";
export const NEW_APPOINTMENT = "NEW_APPOINTMENT";
export const NEW_APPOINTMENT_OK = "NEW_APPOINTMENT_OK";
export const NEW_APPOINTMENT_KO = "NEW_APPOINTMENT_KO";
export const GET_USER = "GET_USER";
export const NEW_ARTICLE = "NEW_ARTICLE";
export const NEW_ARTICLE_OK = "NEW_ARTICLE_OK";
export const DELETE_ARTICLE = "DELETE_ARTICLE";
export const DELETE_ARTICLE_OK = "DELETE_ARTICLE_OK";
export const ERROR_FETCH = "ERROR_FETCH";

// Action
// Lista di tutti gli avvocati
export const getLawyersFetch = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(URL_LAWYERS);
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: GET_LAWYERS, payload: data });
        dispatch({ type: NEW_APPOINTMENT_KO, payload: false });
      }
    } catch (err) {
      dispatch({ type: ERROR_FETCH, payload: "errore nella fetch" });
    } finally {
      //dispatch({ type: ERROR_FETCH, payload: "finally nella fetch" });
    }
  };
};

// Chiamata per un specifico avvocato (i)
export const getLawyerFetch = (id) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(URL_LAWYER + id);
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: GET_LAWYER, payload: data });
        dispatch({ type: NEW_APPOINTMENT_KO, payload: false });
        // dispatch({ type: STOP_LOADING_LAWYER, payload: false });
      }
    } catch (err) {
      dispatch({ type: ERROR_FETCH, payload: "errore nella fetch" });
    } finally {
      //dispatch({ type: ERROR_FETCH, payload: "finally nella fetch" });
    }
  };
};

// Lista di tutti gli articoli
export const getArticlesFetch = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(URL_ARTICLES);
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: GET_ARTICLES, payload: data });
        dispatch({ type: NEW_APPOINTMENT_KO, payload: false });
        //dispatch({ type: STOP_LOADING_ARTICLES, payload: false });
      }
    } catch (err) {
      dispatch({ type: ERROR_FETCH, payload: "errore nella fetch" });
    } finally {
      //dispatch({ type: ERROR_FETCH, payload: "finally nella fetch" });
    }
  };
};

// Salvataggio Richiesta di una consulenza
export const newAppointment = (appointment) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(URL_APPOINTMENTS, {
        method: "POST",
        body: JSON.stringify(appointment),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        dispatch({ type: NEW_APPOINTMENT_OK, payload: true });
      }
    } catch (err) {
      dispatch({ type: ERROR_FETCH, payload: "errore nella fetch" });
    } finally {
      //dispatch({ type: ERROR_FETCH, payload: "finally nella fetch" });
    }
  };
};

// Chiamata per un specifico user (i)
export const getUser = (username) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(URL_USER + username);
      if (response.ok) {
        const data = await response.json();
        dispatch({ type: GET_USER, payload: data });
      }
    } catch (err) {
      dispatch({ type: ERROR_FETCH, payload: "errore nella fetch" });
    } finally {
      //dispatch({ type: ERROR_FETCH, payload: "finally nella fetch" });
    }
  };
};
// Modifica di uno specifico articolo lato admin
export const articleMod = (article) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(URL_ARTICLES + "/" + article.id, {
        method: "PUT",
        body: JSON.stringify(article),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        //dispatch({ type: DELETE_MY_EXPERIENCES, payload: experiences._id });
        //dispatch({ type: POST_MY_EXPERIENCES, payload: experiences });
      }
    } catch (err) {
      dispatch({ type: ERROR_FETCH, payload: "errore nella fetch" });
    } finally {
      //dispatch({ type: ERROR_FETCH, payload: "finally nella fetch" });
    }
  };
};

// Salvataggio nuovo articolo inserito da Admin
export const saveNewArticle = (article) => {
  return async (dispatch, getState) => {
    const response = await fetch(URL_ARTICLES, {
      method: "POST",
      body: JSON.stringify(article),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      // dispatch({ type: NEW_ARTICLE, payload: article });
      dispatch({ type: NEW_ARTICLE_OK, payload: true });
    }
  };
};

// Elimina articolo lato admin
export const deleteArticle = (id) => {
  return async (dispatch, getState) => {
    const response = await fetch(URL_ARTICLES + "/" + id, {
      method: "DELETE",
    });
    if (response.ok) {
      dispatch({ type: DELETE_ARTICLE_OK, payload: id });
      // const pippo = getArticlesFetch();
      dispatch({ type: SELECTED_ARTICLE, payload: null });
    }
  };
};
