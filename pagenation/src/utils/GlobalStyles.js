import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  body {
    background-color: #070707;
    color: #eee;
    line-height: 1.6;
    letter-spacing: 0em;
    display: block;
    min-height: 100%;
  }
  h1{
    margin-top: 0px;
    margin-bottom: 0px;
    margin: 0.1em 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  a{
    text-decoration: none;
  }
  div{
    display: block;
  }
  img{
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
    border: 0;
    overflow-clip-margin: content-box;
    overflow: clip;
  }
  p{
    margin-top: 0px;
    margin-bottom: 0px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
`;

export default GlobalStyle;
