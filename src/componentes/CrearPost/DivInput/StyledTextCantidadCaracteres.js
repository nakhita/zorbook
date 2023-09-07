import { styled } from "styled-components";

export const StyledTextCantidadCaracteres = styled.div`
  text-align: right;
  color: ${(props) => (props.contador <= 0 ? "#fcb7af" : "#ffffff")};
  font-weight: bold;
  letter-spacing: 1.5px;
`;
