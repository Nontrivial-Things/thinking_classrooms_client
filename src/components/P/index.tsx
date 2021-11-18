import styled from "styled-components";
import PProps from "./interface";

type PropsOptional = Partial<PProps>;

const P = styled.p<PropsOptional>`
  font-size: ${(props) => props.fontSize || "1em"};
  font-weight: ${(props) => props.fontWeight || "400"};
  color: ${(props) => props.color || "inherit"};
  text-align: ${(props) => props.textAlign || "inherit"};
  margin-left: ${(props) => props.marginLeft || "0"};
  margin-bottom: ${(props) => props.marginBottom || "0"};
  margin-top: ${(props) => props.marginTop || "0"};
  width: ${(props) => props.width || "auto"};
  text-shadow: ${(props) => props.shadow || "0"};
  padding-bottom: ${(props) => props.paddingBottom || "0"};
`;

export default P;
