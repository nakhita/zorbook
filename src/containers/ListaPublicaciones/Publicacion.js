import { useDispatch, useSelector } from "react-redux";
import { StyledFieldset } from "../../componentes/Publicacion/Fieldset/StyledFieldset";
import { StyledLegend } from "../../componentes/Publicacion/Fieldset/StyledLegend";
import { StyledHr } from "../../componentes/Publicacion/Hr/StyledHr";
import { StyledButtonMegusta } from "../../componentes/Publicacion/InformacionPublicacion/StyledButtonMegusta";
import { StyledCantidadComentarios } from "../../componentes/Publicacion/InformacionPublicacion/StyledCantidadComentarios";
import { StyledConteinerInformacionPublicacion } from "../../componentes/Publicacion/InformacionPublicacion/StyledConteinerInformacionPublicacion";
import { StyledMegusta } from "../../componentes/Publicacion/InformacionPublicacion/StyledMegusta";
import { StyledButtonComentario } from "../../componentes/Publicacion/Input/StyledButtonComentario";
import { StyledInput } from "../../componentes/Publicacion/Input/StyledInput";
import { StyledInputContainer } from "../../componentes/Publicacion/Input/StyledInputContainer";
import { StyledConteinerLi } from "../../componentes/Publicacion/Li/StyledConteinerLi";
import { StyledLi } from "../../componentes/Publicacion/Li/StyledLi";
import { StyledLiButtonDeleted } from "../../componentes/Publicacion/Li/StyledLiButtonDeleted";
import { StyledLiConteiner } from "../../componentes/Publicacion/Li/StyledLiConteiner";
import { StyledUl } from "../../componentes/Publicacion/Ul/StyledUl";
import {
  crearComentario,
  actualizarComentario,
  agregarMegusta,
  borrarPublicacion,
} from "../ListaPublicaciones/listaPublicacionesSlice";
import { StyledContenedorComentario } from "../../componentes/Publicacion/Comentario/StyledContenedorComentario";
import { StyledComentarioUser } from "../../componentes/Publicacion/Comentario/StyledComentarioUser";
import { StyledComentarioTexto } from "../../componentes/Publicacion/Comentario/StyledComentarioTexto";
import { useState } from "react";

const Publicacion = ({ publicacion }) => {
  const dispatch = useDispatch();
  const [comentario, setComentario] = useState("");

  const handleComentar = (id, user) => {
    if (comentario.trim() !== "") {
      dispatch(
        crearComentario({
          id: id,
          comentario: { user: user, texto: comentario },
        })
      );
    }
  };
  const mostrarComentarios = (comentarios) => {
    if (comentarios.length > 0) {
      return comentarios.map((comentario) => (
        <StyledContenedorComentario>
          <StyledComentarioUser key={comentario.idcomentario}>
            {comentario.user}:
          </StyledComentarioUser>
          <StyledComentarioTexto>{comentario.texto}</StyledComentarioTexto>
        </StyledContenedorComentario>
      ));
    }
  };
  return (
    <StyledUl key={publicacion.idpost}>
      <StyledLiConteiner>
        <StyledConteinerLi>
          <StyledFieldset>
            <StyledLegend>{publicacion.user} escribió:</StyledLegend>
            <StyledLi>{publicacion.post}</StyledLi>
            <StyledLiButtonDeleted
              key={`btn-${publicacion.idpost}`}
              onClick={(e) => dispatch(borrarPublicacion(publicacion.idpost))}
            >
              X
            </StyledLiButtonDeleted>
          </StyledFieldset>
        </StyledConteinerLi>
        <StyledConteinerInformacionPublicacion>
          <StyledButtonMegusta
            onClick={(e) =>
              dispatch(
                agregarMegusta({
                  id: publicacion.idpost,
                })
              )
            }
          ></StyledButtonMegusta>
          <StyledMegusta>{publicacion.megusta} MeGustas</StyledMegusta>
          <StyledCantidadComentarios>
            {publicacion.comentarios.length}
            {publicacion.comentarios.length > 1
              ? " Comentarios"
              : " Comentario"}
          </StyledCantidadComentarios>
        </StyledConteinerInformacionPublicacion>
        <StyledHr></StyledHr>
        <StyledConteinerLi>
          {mostrarComentarios(publicacion.comentarios)}
        </StyledConteinerLi>
        <StyledConteinerLi>
          <div>
            <StyledInputContainer>
              <StyledInput
                type="text"
                placeholder="Escribe tu comentario..."
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
              />
              <StyledButtonComentario
                onClick={(e) => {
                  handleComentar(publicacion.idpost, publicacion.user);
                }}
              >
                Comentar
              </StyledButtonComentario>
            </StyledInputContainer>
          </div>
        </StyledConteinerLi>
      </StyledLiConteiner>
    </StyledUl>
  );
};
export default Publicacion;
