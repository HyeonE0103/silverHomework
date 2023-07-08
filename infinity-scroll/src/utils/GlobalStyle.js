import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body{
    margin: 0;
    min-height: 100%;
    background-color: #fff;
    font-family: Arial,sans-serif;
    font-size: 14px;
    line-height: 20px;
    color: #333;
  }
  a{
    cursor: pointer;
  }
`;

export default GlobalStyle;
