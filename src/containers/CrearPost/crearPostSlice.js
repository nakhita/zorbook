import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mensaje: "Haz clic aquí y comienza a escribir...",
  cantidadMaximaCaracteres: 250,
};

export const crearPostSlice = createSlice({
  name: "crearPostSlice",
  initialState,
  reducers: {},
});

export const {} = crearPostSlice.actions;

export default crearPostSlice.reducer;
