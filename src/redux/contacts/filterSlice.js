import { createSlice } from "@reduxjs/toolkit";

const filters = '';

const filtersSlice = createSlice({
  name: "filters",
  initialState: filters,

  reducers: {
    filterContacts(state, action) {
      return state = action.payload
    },
    

  },
});

export const { filterContacts } = filtersSlice.actions;
//обязательно дестуктуризировать

export const filterReducer = filtersSlice.reducer;

