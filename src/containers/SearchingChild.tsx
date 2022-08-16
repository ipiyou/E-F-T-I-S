import styled from "@emotion/styled";
import { FormEvent, useEffect, useState } from "react";
import InputForm from "../components/search/InputForm";
import MapRecent from "../components/search/MapRecent";
import useForm from "../hooks/useForm";
import useSearch from "../hooks/useSearch";
import useGetItem from "../hooks/useGetItem";
import SearchItem from "../components/ItemList/SearchItem";
import SearchFocus from "../components/search/SearchFocus";
import SearchingNow from "../components/search/SearchingNow";

export interface useFormType {
  searchValue: string;
}

function SearchingChild() {
  const [Focus, setFocus] = useState<boolean>(false);
  const { recent, AddRecent, DelRecent } = useSearch();
  const [Search, setSearch] = useState<boolean>(true);
  const { slice, ReturnSearchItem, BottomTouch } = useGetItem();
  const [SearchKeyword, setSearchKeyword, handleSearchKeyword] =
    useForm<useFormType>({
      searchValue: "",
    });

  const Searching = (onoff: boolean) => {
    setSearch(onoff);
  };

  const ClickIcon = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AddRecent(SearchKeyword.searchValue, Searching);
  };

  const RecentClick = (data: string) => {
    setSearchKeyword({ searchValue: data });
    AddRecent(data, Searching);
  };

  useEffect(() => {
    ReturnSearchItem(SearchKeyword.searchValue, Searching);
    setFocus(false);
  }, [Search]);
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
      </_Wrapper>
      <SearchFocus Focus={Focus} CloseBackground={() => setFocus(false)} />
      <SearchingNow slice={slice} BottomTouch={BottomTouch} Search={Search} />
    </>
  );
}

const _Wrapper = styled.div`
  position: absolute;
  top: 15%;
  z-index: 15;
  width: 560px;
  min-height: 56px;
  background-color: white;
  border-radius: 8px;
`;

export default SearchingChild;
