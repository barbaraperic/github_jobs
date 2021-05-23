import { createGlobalStyle } from "styled-components";
import { primaryFont, secondaryFont } from "./typography";
import { normalize } from "polished";

export const GlobalStyle = createGlobalStyle`
${normalize()}
  html {
    font-size: 16px;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-family: ${primaryFont};
    width: 90%;
    margin: 0 auto;
    color: #334680;
  }

`