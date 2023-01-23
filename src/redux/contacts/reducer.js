import { combineReducers } from "redux";

const contactsInitialState = [];
const filters = ''

export const rootContacts = (state = contactsInitialState, action) => {
  switch (action.type) {
    case "contacts/addContacts":
      return [...state, action.payload]
      
    case 'contacts/delContacts':
      return state.filter(contact => contact.id !== action.payload)
         
    default:
      return state;
  }
}

export const rootFilters = (state = filters, action) => {
  switch (action.type) {
    case 'filter/filterContacts':
      return action.payload
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  contacts: rootContacts,
  filters: rootFilters
});













