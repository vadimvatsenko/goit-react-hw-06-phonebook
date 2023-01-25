import { createReducer } from "@reduxjs/toolkit";
import { addContacts, delContacts, filterContacts } from "./actions";

const contactsInitialState = [];
const filters = '';

const rootContactsOption = {
  [addContacts]: (state, action) => {
    return [...state, action.payload]
  },
  [delContacts]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload)
  },
}

const rootFiltersOption = {
  [filterContacts]: (state, action) => {
    return action.payload
  }
}

export const rootContacts = createReducer(contactsInitialState, rootContactsOption)
export const rootFilters = createReducer(filters, rootFiltersOption)

//=============== Before 2 ========================
// import { addContacts, delContacts, filterContacts } from "./actions";

// const contactsInitialState = [];
// const filters = ''

// export const rootContacts = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case addContacts.type:
//       return [...state, action.payload]
      
//     case delContacts.type:
//       return state.filter(contact => contact.id !== action.payload)
         
//     default:
//       return state;
//   }
// }

// export const rootFilters = (state = filters, action) => {
//   switch (action.type) {
//     case filterContacts.type:
//       return action.payload
//     default:
//       return state
//   }
// }

//=============== Before ========================
// import { combineReducers } from "redux";

// const contactsInitialState = [];
// const filters = ''

// export const rootContacts = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case "contacts/addContacts":
//       return [...state, action.payload]
      
//     case 'contacts/delContacts':
//       return state.filter(contact => contact.id !== action.payload)
         
//     default:
//       return state;
//   }
// }

// export const rootFilters = (state = filters, action) => {
//   switch (action.type) {
//     case 'filter/filterContacts':
//       return action.payload
//     default:
//       return state
//   }
// }

// export const rootReducer = combineReducers({
//   contacts: rootContacts,
//   filters: rootFilters
// });













