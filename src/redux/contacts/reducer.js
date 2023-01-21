import { combineReducers } from "redux";

const contactsInitialState = [];
const filters = ''

export const rootContacts = (state = contactsInitialState, action) => {
  switch (action.type) {
    case "contacts/addContacts":
      return [...state, action.payload]
      
    case 'contacts/delContacts':
      return
      state.filter(contact => contact.id !== action.payload);
      
    // case "filter/filterContacts":
    //   return{
    //     contacts: state.contacts.filter(contact => contact.name.includes(action.payload)),
    //   }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  contacts: rootContacts,
  // filters: filtersReducer,
});

// export const rootFilter = (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case "filter/filterContacts":
//       return {
          
//       }
//     default:
//       return ''
//   }
// }













