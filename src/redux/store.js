import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const initialState = {
  contacts: [],
  filter: ""
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

// Создаем расширение стора чтобы добавить инструменты разработчика
const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);