import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./contacts/filterSlice";
import { persistStore } from "redux-persist";
import { persistContactsReducer } from "./contacts/contactsSlice";

export const store = configureStore({
  reducer: {
    contacts: persistContactsReducer,
    filters: filterReducer
  }
});

export const persistor = persistStore(store)

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