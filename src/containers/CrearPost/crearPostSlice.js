import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mensaje: "Haz clic aquí y comienza a escribir...",
  cantidadMaximaCaracteres: 250,
};

export const crearPostSlice = createSlice({
  name: "crearPostSlice",
  initialState,
  reducers: {
    actualizarMensaje: (state, action) => {
      state.mensaje = "Haz clic aquí y comienza a escribir...";
    },
  },
});

export const { actualizarMensaje } = crearPostSlice.actions;

export default crearPostSlice.reducer;
