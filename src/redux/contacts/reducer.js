import { combineReducers } from "redux";

const contactsInitialState = [
  {
      id: 'ecd1Etg3WGzgcGOnAbWHG',
      name: 'Вадим Ваценко',
      number: '0934223131'
    },
    {
      id: 'KUb056LAQjHaiVoCHaEOq',
      name: 'Вадим',
      number: '0934223131'
    },
    {
      id: 'oegE0yYQf8OktPKV9mCVh',
      name: 'Vadik',
      number: '0934223131'
    }
];

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













