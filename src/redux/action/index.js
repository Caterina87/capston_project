// Url delle Fetch
const URL_LAWYERS = "https://my-api-epicode-ebc661be151d.herokuapp.com/lawyers";
const URL_LAWYER = "https://my-api-epicode-ebc661be151d.herokuapp.com/lawyers?id=";
const URL_ARTICLES = "https://my-api-epicode-ebc661be151d.herokuapp.com/articles";
const URL_APPOINTMENTS = "https://my-api-epicode-ebc661be151d.herokuapp.com/appointments";
//const URL_APPOINTMENTS = "https://my-api-epicode-ebc661be151d.herokuapp.com/appointments";

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

// Action
// Lista di tutti gli avvocati
export const getLawyersFetch = () => {
  return async (dispatch, getState) => {
    const response = await fetch(URL_LAWYERS);
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: GET_LAWYERS, payload: data });
      dispatch({ type: NEW_APPOINTMENT_KO, payload: false });
      //dispatch({ type: STOP_LOADING_LAWYERS, payload: false });
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
      dispatch({ type: NEW_APPOINTMENT_KO, payload: false });
      // dispatch({ type: STOP_LOADING_LAWYER, payload: false });
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
      dispatch({ type: NEW_APPOINTMENT_KO, payload: false });
      //dispatch({ type: STOP_LOADING_ARTICLES, payload: false });
    }
  };
};

// Salvataggio Richiesta di una consulenza
export const newAppointment = (appointment) => {
  return async (dispatch, getState) => {
    const response = await fetch(URL_APPOINTMENTS, {
      method: "POST",
      body: JSON.stringify(appointment),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      // dispatch({ type: NEW_APPOINTMENT, payload: appointment });
      dispatch({ type: NEW_APPOINTMENT_OK, payload: true });
    }
  };
};
