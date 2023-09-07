import { createSlice } from "@reduxjs/toolkit";

const initialState = { userName: "Zoram" };

export const listaPublicacionesSlice = createSlice({
  name: "listaPublicacionesSlice",
  initialState,
  reducers: {},
});

export const {} = listaPublicacionesSlice.actions;

export default listaPublicacionesSlice.reducer;
