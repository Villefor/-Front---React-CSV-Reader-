import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 *{
     margin: 0;
     padding: 0;
     outline: 0;
     box-sizing: border-box;

  }

  body {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 14px;
      background-image: linear-gradient(130deg,#f8f8f8 0%,#f8f8f8 89%);
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      word-wrap: break-word;
  }
  html, body, #root {
      height: 100%;

  }
 `;
