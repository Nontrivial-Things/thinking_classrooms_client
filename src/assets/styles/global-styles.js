import { createGlobalStyle } from "styled-components";
import PTSans from "../fonts/PTSans-Regular.ttf";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'PT Sans';
    src: url(${PTSans}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: auto;
  }
  
  html,
  body {
    height: 100%;
    min-height: 100%;
    width: 100%;
    color: #1F1F1F;
    display: flex; 
    flex-direction: column; 
  }

  input:-webkit-autofill {
   background: white;
  }

  body {
    font-family: 'PT Sans', sans-serif;
    font-size: 160%;
    font-size: 1.6rem;
  }

  html {
    font-size: 62.5%;
  }

  p,
  label {
    line-height: 2.4rem;
    letter-spacing: 0.016rem;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 400;
  }

  a {
    text-decoration: none;
    transition: color 0.05s ease-in-out;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;

  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export default GlobalStyle;
