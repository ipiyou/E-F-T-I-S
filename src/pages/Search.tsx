import styled from "@emotion/styled";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { useFormType } from "../App";
import InputForm from "../components/search/InputForm";
import MapRecent from "../components/search/MapRecent";
import useRecent from "../hooks/useRecent";

interface PropType {
  setSearch: (Search: boolean) => void;
  SearchKeyword: useFormType;
  setSearchKeyword: Dispatch<SetStateAction<useFormType>>;
  handleSearchKeyword: (e: ChangeEvent<HTMLInputElement>) => void;
}

function SearchElement({
  setSearch,
  SearchKeyword,
  setSearchKeyword,
  handleSearchKeyword,
}: PropType) {
  const [Focus, setFocus] = useState<boolean>(false);
  const { recent, AddRecent, DelRecent } = useRecent({ setSearch });

  const ClickIcon = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AddRecent(SearchKeyword.searchValue);
  };

  const RecentClick = (data: string) => {
    setSearchKeyword({ searchValue: data });
    AddRecent(data);
  };
  return (
    <_Wrapper>
      <InputForm
        ClickIcon={ClickIcon}
        SearchKeyword={SearchKeyword}
        handleSearchKeyword={handleSearchKeyword}
        setFocus={setFocus}
      />
      <MapRecent
        Focus={Focus}
        recent={recent}
        RecentClick={RecentClick}
        DelRecent={DelRecent}
      />
      {Focus && <BackGroundFocus onClick={() => setFocus(false)} />}
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  position: relative;
  z-index: 15;
  width: 560px;
  min-height: 56px;
  background-color: white;
  border-radius: 8px;
`;

const BackGroundFocus = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
`;

export default SearchElement;
