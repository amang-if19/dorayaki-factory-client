import React from "react";
import styled from "styled-components";
import { themeColor } from "../utils";
function Badge({
  content,
  clean = false,
  glow = false,
  paid = false,
  late = false,
}) {
  return (
    <Div clean={clean} glow={glow} paid={paid} late={late}>
      {content}
    </Div>
  );
} 

const Div = styled.span`
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  color: white;
  background-color: ${themeColor};
  cursor: pointer;
`;

export default Badge;