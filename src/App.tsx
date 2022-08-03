import React from "react";
import styled from "@emotion/styled";
import {MainBox} from "./components/MainBox";
import { Global } from "@emotion/react";
import ItemBox from "./components/ItemBox";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <MainBox>
      <SearchBox/>
      <ItemBox />
    </MainBox>
  );
}


export default App;
