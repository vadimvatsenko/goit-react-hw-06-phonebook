import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
// import { filterReducer } from "./contacts/filterSlice";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        // filters: filterReducer
  }
});

//=============== Before 2 ========================
// import { configureStore } from "@reduxjs/toolkit";
// import { rootContacts, rootFilters } from "./contacts/reducer";

// export const store = configureStore({
//     reducer: {
//         contacts: rootContacts,
//         filters: rootFilters
//   }
// });

//=============== Before ========================
// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./contacts/reducer";

// // Создаем расширение стора чтобы добавить инструменты разработчика
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);