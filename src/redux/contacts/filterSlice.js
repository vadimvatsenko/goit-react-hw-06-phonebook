import { createSlice } from "@reduxjs/toolkit";

const filters = '';

const filtersSlice = createSlice({
  name: "filters",
  initialState: filters,

  reducers: {
    filterContacts(state, action) {
      state = action.payload
    },
    

  },
});

const filterContacts = filtersSlice.actions;

export const filterReducer = filtersSlice.reducer;

