import { createSlice } from "@reduxjs/toolkit";

const initialState = { publicaciones: [] };

export const listaPublicacionesSlice = createSlice({
  name: "listaPublicacionesSlice",
  initialState,
  reducers: {
    crearPost: (state, action) => {
      state.publicaciones.push(action.payload);
      console.log(action.payload);
    },
  },
});

export const { crearPost } = listaPublicacionesSlice.actions;

export default listaPublicacionesSlice.reducer;
