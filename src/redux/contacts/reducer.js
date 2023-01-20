import { combineReducers } from "redux";

const contactsInitialState = {
  contacts: [],
};

console.log(contactsInitialState)

const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case "contacts/addContacts":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    
    case 'filter/filterContacts':
      return {
        contacts:
          state.contacts.filter(contact =>  
          contact.name.toLowerCase().includes(action.payload)
    )
      }
    default:
      return state;
  }
};

// const filtersInitialState = {
//   filters: ''
// }

// const filterReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case 'contacts/delContacts':
//       return {
//         ...state,
//         contacts: state.contacts.filter(contact => contact.id !== action.payload),
//       }
//     default:
//       return state
//   }
// }

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  // filters: filterReducer,
});






