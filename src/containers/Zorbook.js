import React from "react";
import { StyledPanel } from "../componentes/StyledPanel";
import CrearPost from "./CrearPost/CrearPost";
import ListaPublicaciones from "./ListaPublicaciones/ListaPublicaciones";

const Zorbook = () => {
  return (
    <StyledPanel>
      <CrearPost></CrearPost>
      <ListaPublicaciones></ListaPublicaciones>
    </StyledPanel>
  );
};
export default Zorbook;
