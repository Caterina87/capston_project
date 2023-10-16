import { NEW_APPOINTMENT_OK } from "../action";

const initialState = {
  savedAppointment: false,
};

const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_APPOINTMENT_OK:
      return {
        ...state,
        savedAppointment: action.payload,
      };

    default:
      return state;
  }
};
export default appointmentReducer;
