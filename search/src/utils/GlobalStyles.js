import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    font-family: Poppins, sans-serif;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
  body{
    margin: 0;
    min-height: 100%;
    background-color: #fff;
    color: #2b2b2b;
    font-size: 1rem;
    line-height: 1.5;
    display: block;
    
  }
  main{
    display: block;
  }
  div{
    display: block;
  }
  input{
    font: inherit;
    margin: 0;
  }
  h1{
    display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    line-height: 1.2;
    font-weight: 700;
    font-size: 2.5rem;
  }
`;
export default GlobalStyle;
