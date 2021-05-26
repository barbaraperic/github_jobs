import { createGlobalStyle } from "styled-components";
import { primaryFont, secondaryFont } from "./typography";
import { neutral }  from "./colours"
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
    background-color: ${neutral[400]};
  }

  small {
    color: ${neutral[100]};
    font-size: 12px;
  }

  span {
    font-size: 14px;
  }

`