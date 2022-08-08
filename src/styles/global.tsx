import React from "react";
import { Global, css } from "@emotion/react";

const style = css`
  body {
    ::-webkit-scrollbar {
      display: none;
    }
    font-size: 20px;
    color: #9a8866;
    background-color: #1B1913;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
