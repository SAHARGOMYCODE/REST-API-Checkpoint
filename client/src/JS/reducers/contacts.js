//import constants
import {
  GET_CONTACTS_FAIL,
  GET_CONTACTS_SUCCESS,
  GET_CONTACTS_LOAD,
  EDIT_CONTACT,
  GET_CONTACT,
} from "../constants/contacts";
//INITIAL
const initialState = {
  contacts: [],
  loadContacts: false,
  errors: null,
  edit: false,
  user: {},
};
export const contactReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS_LOAD:
      return { ...state, loadContacts: true };
    case GET_CONTACTS_SUCCESS:
      return { ...state, contacts: payload, loadContacts: false };
    case GET_CONTACTS_FAIL:
      return { ...state, loadContacts: false, errors: payload };
    case GET_CONTACT:
      return { ...state, user: payload };
    case EDIT_CONTACT:
      return { ...state, editContact: payload };
    default:
      return state;
  }
};
