import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSilce = createSlice({
  name: "todo",
  initialState: ["Fazer café", "Estudar Redux"],

  reducers: {},
});

export const store = configureStore({
  reducer: {
    todo: todoSilce.reducer,
  },
});
