import { configureStore } from "@reduxjs/toolkit";
import crearPostReducer from "./containers/CrearPost/crearPostSlice";
import listaPublicacionesReducer from "./containers/ListaPublicaciones/listaPublicacionesSlice";
import userSlice from "./containers/User/userSlice";

export const store = configureStore({
  reducer: {
    crearPost: crearPostReducer,
    listaPublicaciones: listaPublicacionesReducer,
    user: userSlice,
  },
});
