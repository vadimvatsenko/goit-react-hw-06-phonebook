import { combineReducers } from "redux";

// const contactsInitialState = {
//   contacts: [],
//   filters: ''
// };
const contactsInitialState = []


console.log(contactsInitialState)

const contactsReducer = (state = contactsInitialState, action) => {
  // export const rootReducer = (state = contactsInitialState, action) => {
  switch (action.type) {
    case "contacts/addContacts":
      return [...state, action.payload];
    case 'contacts/delContacts':
    return state.filter(contact => contact.id !== action.payload)
    default:
      return state;
  }
};

const filtersInitialState = ''

const filterReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filter/filterContacts':
      return {
        ...state,
        contacts: state.filter(contact => contact.id !== action.payload),
      }
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filterReducer,
});

//сдесь важно, contscts и ашдеукі уже не используются сверху, каждому редусеру свой стейт






