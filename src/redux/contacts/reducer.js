const initialState = {
  contacts: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "contacts/addContacts":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case 'contacts/delContacts':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload),
      }
    default:
      return state;
  }
};