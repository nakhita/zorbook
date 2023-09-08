import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledConteinerLi } from "../../componentes/Publicacion/Li/StyledConteinerLi";
import { StyledLi } from "../../componentes/Publicacion/Li/StyledLi";
import { StyledUl } from "../../componentes/Publicacion/Ul/StyledUl";
import { StyledLiConteiner } from "../../componentes/Publicacion/Li/StyledLiConteiner";
import { StyledLiButtonDeleted } from "../../componentes/Publicacion/Li/StyledLiButtonDeleted";
import { StyledFieldset } from "../../componentes/Publicacion/Fieldset/StyledFieldset";
import { StyledLegend } from "../../componentes/Publicacion/Fieldset/StyledLegend";
import { StyledMegusta } from "../../componentes/Publicacion/InformacionPublicacion/StyledMegusta";

import { StyledContenedorComentario } from "../../componentes/Publicacion/Comentario/StyledContenedorComentario";
import { StyledComentarioUser } from "../../componentes/Publicacion/Comentario/StyledComentarioUser";
import { StyledComentarioTexto } from "../../componentes/Publicacion/Comentario/StyledComentarioTexto";

import {
  crearComentario,
  actualizarComentario,
  agregarMegusta,
  borrarPublicacion,
} from "../ListaPublicaciones/listaPublicacionesSlice";
import Publicacion from "./Publicacion";

const ListaPublicaciones = () => {
  const dispatch = useDispatch();
  const { publicaciones, nuevocomentario } = useSelector(
    (state) => state.listaPublicaciones
  );

  const mostrarLista = (elemento) => {
    if (elemento.length > 0) {
      return (
        <>
          {elemento.map((publicacion) => (
            <Publicacion publicacion={publicacion}></Publicacion>
          ))}
        </>
      );
    }
  };
  return mostrarLista(publicaciones);
};
export default ListaPublicaciones;
