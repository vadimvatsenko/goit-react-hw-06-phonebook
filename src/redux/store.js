import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./contacts/filterSlice";
import { contactsReducer } from "./contacts/contactsSlice";
import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'contacts',
  storage,
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
})

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions:
              [FLUSH,
              REHYDRATE,
              PAUSE,
              PERSIST,
              PURGE,
              REGISTER],
      },
    }),
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