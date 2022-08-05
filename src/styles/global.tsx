import React from "react";
import { Global, css } from "@emotion/react";

const style = css`
  html {
    font-size: 24px;
    color: #9a8866;
    background-color: #373633;
  }
  select {
    font-size: 24px;
  }
  input {
    font-size: 24px;
    border: 0;
    outline: 0 !important;
  }
  button {
    font-size: 24px;
  }
  textarea {
    border: 0;
    outline: 0 !important;
    font-size: 24px;
  }
  body {
    ::-webkit-scrollbar {
    display: none;
  }
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
