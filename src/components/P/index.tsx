import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

interface Props {
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  textAlign?: string;
  marginLeft?: string;
  marginBottom?: string;
  marginTop?: string;
  width?: string;
  shadow?: string;
}

const P = styled.p<Props>`
  font-size: ${(props) => props.fontSize || "1em"};
  font-weight: ${(props) => props.fontWeight || "400"};
  color: ${(props) => props.color || "inherit"};
  text-align: ${(props) => props.textAlign || "inherit"};
  margin-left: ${(props) => props.marginLeft || "0"};
  margin-bottom: ${(props) => props.marginBottom || "0"};
  margin-top: ${(props) => props.marginTop || "0"};
  width: ${(props) => props.width || "auto"};
  text-shadow: ${(props) => props.shadow || "0"};
`;

export default P;
