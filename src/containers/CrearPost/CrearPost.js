import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledPanelCrearPost } from "../../componentes/CrearPost/StyledPanelCrearPost";
import { StyledTitulo } from "../../componentes/CrearPost/Titulo/StyledTitulo";
import { StyledSubPanel } from "../../componentes/CrearPost/SubPanel/StyledSubPanel";
import { StyledDivInput } from "../../componentes/CrearPost/DivInput/StyledDivInput";
import { StyledDivInputPanel } from "../../componentes/CrearPost/DivInput/StyledDivInputPanel";
import { StyledTextCantidadCaracteres } from "../../componentes/CrearPost/DivInput/StyledTextCantidadCaracteres";
import { StyledButton } from "../../componentes/Button/StyledButton";
import { v4 as uuidv4 } from "uuid";
import { crearPost } from "../ListaPublicaciones/listaPublicacionesSlice";
import { actualizarMensaje } from "../CrearPost/crearPostSlice";

const CrearPost = () => {
  const dispatch = useDispatch();
  const { mensaje, cantidadMaximaCaracteres } = useSelector(
    (state) => state.crearPost
  );
  const { userName } = useSelector((state) => state.user);
  const divRef = useRef(null);
  const [contador, setContador] = useState(250);

  const handleContentChange = () => {
    const nuevoContenido = divRef.current.textContent;
    const caracteresRestantes =
      cantidadMaximaCaracteres - nuevoContenido.length;
    setContador(caracteresRestantes);
  };

  const handleDivClick = () => {
    if (divRef.current.textContent === mensaje) {
      divRef.current.textContent = "";
    }
  };

  const handleDivBlur = () => {
    if (divRef.current.textContent === "") {
      divRef.current.textContent = mensaje;
    }
  };
  const handleDivFocus = () => {
    if (divRef.current.textContent === mensaje) {
      divRef.current.textContent = "";
    }
  };
  const crearPostFuncion = () => {
    const contenido = divRef.current.textContent;
    const id = uuidv4();
    dispatch(
      crearPost({
        idpost: id,
        user: userName,
        post: contenido,
        megusta: 110,
        comentarios: [{ user: userName, texto: "Hola pepito como estas?" }],
      })
    );
    dispatch(actualizarMensaje());
    divRef.current.textContent = mensaje;
  };

  useEffect(() => {
    divRef.current.addEventListener("click", handleDivClick);
    divRef.current.addEventListener("blur", handleDivBlur);

    return () => {
      divRef.current.removeEventListener("click", handleDivClick);
      divRef.current.removeEventListener("blur", handleDivBlur);
    };
  }, []);
  return (
    <StyledPanelCrearPost>
      <StyledTitulo>Bienvenido {userName}</StyledTitulo>
      <StyledSubPanel>
        <StyledDivInputPanel>
          <StyledDivInput
            contentEditable={true}
            onInput={handleContentChange}
            onClick={handleDivClick}
            onFocus={handleDivFocus}
            ref={divRef}
          >
            {mensaje}
            {console.log(mensaje)}
          </StyledDivInput>
          <StyledTextCantidadCaracteres contador={contador}>
            Caracteres restantes: {contador} / 250
          </StyledTextCantidadCaracteres>
        </StyledDivInputPanel>
        <StyledButton onClick={crearPostFuncion}>POST</StyledButton>
      </StyledSubPanel>
    </StyledPanelCrearPost>
  );
};
export default CrearPost;
