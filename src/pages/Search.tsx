import styled from "@emotion/styled";
import {
  FormEvent,
  useState,
} from "react";
import SearchItem from "./SearchItem";
import InputForm from "../components/search/InputForm";
import MapRecent from "../components/search/MapRecent";
import useForm from "../hooks/useForm";
import useSearch from "../hooks/useSearch";

export interface useFormType {
    searchValue: string;
  }  

function SearchElement() {
  const [Focus, setFocus] = useState<boolean>(false);
  const { recent, AddRecent, DelRecent,Search,CompleteSearch} = useSearch();
  const [SearchKeyword, setSearchKeyword, handleSearchKeyword] =
    useForm<useFormType>({
      searchValue: "",
    });

  const ClickIcon = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AddRecent(SearchKeyword.searchValue);
  };

  const RecentClick = (data: string) => {
    setSearchKeyword({ searchValue: data });
    AddRecent(data);
  };
  return (
    <>
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
    <SearchItem Search={Search} CompleteSearch={CompleteSearch} Text={SearchKeyword}/>
    </>
    
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
