import { createSlice } from "@reduxjs/toolkit";

const initialState = { publicaciones: [] };

export const listaPublicacionesSlice = createSlice({
  name: "listaPublicacionesSlice",
  initialState,
  reducers: {
    crearPost: (state, action) => {
      state.publicaciones.push(action.payload);
    },
    crearComentario: (state, action) => {
      const index = state.publicaciones.findIndex(
        (publicacion) => publicacion.idpost === action.payload.id
      );

      if (index !== -1) {
        state.publicaciones[index].comentarios.push(action.payload.comentario);
        state.nuevocomentario = "";
      }
    },
    agregarMegusta: (state, action) => {
      const index = state.publicaciones.findIndex(
        (publicacion) => publicacion.idpost === action.payload.id
      );
      if (index !== -1) {
        state.publicaciones[index].megusta =
          state.publicaciones[index].megusta + 1;
      }
    },
    borrarPublicacion: (state, action) => {
      const nuevasPublicaciones = state.publicaciones.filter(
        (publicacion) => publicacion.idpost !== action.payload
      );
      console.log(nuevasPublicaciones);
      state.publicaciones = nuevasPublicaciones;
    },
  },
});

export const { crearPost, crearComentario, agregarMegusta, borrarPublicacion } =
  listaPublicacionesSlice.actions;

export default listaPublicacionesSlice.reducer;
