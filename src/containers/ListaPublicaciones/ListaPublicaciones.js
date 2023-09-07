import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledUl } from "./Ul/StyledUl";
import { StyledLiConteiner } from "./Li/StyledLiConteiner";
import { StyledConteinerLi } from "./Li/StyledConteinerLi";
import { StyledLi } from "./Li/StyledLi";
import { StyledLiButtonDeleted } from "./Li/StyledLiButtonDeleted";

const ListaPublicaciones = () => {
  const dispatch = useDispatch();
  const { publicaciones } = useSelector((state) => state.listaPublicaciones);
  /*
        idpost: id,
        user: userName,
        post: contenido,
        megusta: 0,
        comentario: {},*/
  const mostrarComentarios = (comentarios) => {
    console.log(comentarios);
    if (comentarios.length > 0) {
      comentarios.map((comentario) => (
        <StyledConteinerLi>
          <StyledLi key={comentario.idcomentario}>{comentario.user}</StyledLi>
          <StyledLi>{comentario.texto}</StyledLi>
          {console.log("entro:", comentario.user)}
          {console.log("entro:", comentario.texto)}
        </StyledConteinerLi>
      ));
    }
  };
  const mostrarLista = (elemento) => {
    console.log("elemento", elemento);
    if (elemento.length > 0) {
      return (
        <StyledUl>
          {elemento.map((publicacion) => (
            <StyledLiConteiner key={publicacion.idpost}>
              <StyledConteinerLi>
                <StyledLi key={publicacion.idpost}>{publicacion.user}</StyledLi>
                <StyledLi key={publicacion.idpost}>{publicacion.post}</StyledLi>
              </StyledConteinerLi>
              <StyledConteinerLi>
                <StyledLi key={publicacion.idpost}>
                  {publicacion.megusta} MeGustas
                </StyledLi>
              </StyledConteinerLi>
              <StyledConteinerLi>
                {mostrarComentarios(publicacion.comentarios)}
              </StyledConteinerLi>
              <StyledLiButtonDeleted key={`btn-${publicacion.idpost}`}>
                X
              </StyledLiButtonDeleted>
            </StyledLiConteiner>
          ))}
        </StyledUl>
      );
    }
  };
  return mostrarLista(publicaciones);
};
export default ListaPublicaciones;
