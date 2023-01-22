import { combineReducers } from "redux";

const contactsInitialState = [];
const filters = ''

export const rootContacts = (state = contactsInitialState, action) => {
  switch (action.type) {
    case "contacts/addContacts":
      return [...state, action.payload]
      
    case 'contacts/delContacts':
      return state.filter(contact => contact.id !== action.payload)
    
    case 'filter/filterContacts': 
      return state.filter(contact => contact.name.toLowerCase().includes(action.payload))
 
      
    default:
      return state;
  }
};

export const rootFilters = (state = filters, actions) => {
  
}



export const rootReducer = combineReducers({
  contacts: rootContacts,
});













