import styled from "@emotion/styled";
import { FormEvent, useEffect } from "react";
import InputForm from "../components/search/InputForm";
import MapRecent from "../components/search/MapRecent";
import useForm from "../hooks/useForm";
import useGetItem from "../hooks/useGetItem";
import SearchFocus from "../components/search/SearchFocus";
import SearchingNow from "../components/search/SearchingNow";
import { useAppDispatch, useAppSelector } from "../module";
import {
  addRecent,
  DelRecent,
  SetFocus,
  SetSearch,
} from "../module/recentReducer";

export interface useFormType {
  searchValue: string;
}

function SearchingChild() {
  const { Focus, recent, Search } = useAppSelector((state) => state.recent);
  const dispatch = useAppDispatch();

  const { slice, ReturnSearchItem, BottomTouch } = useGetItem();
  const [SearchKeyword, setSearchKeyword, handleSearchKeyword] =
    useForm<useFormType>({
      searchValue: "",
    });

  useEffect(() => {
    ReturnSearchItem(SearchKeyword.searchValue, (onoff) =>
      dispatch(SetSearch(onoff))
    );
    dispatch(SetFocus(false));
  }, [Search]);
  return (
    <>
      <_Wrapper>
        <InputForm
          ClickIcon={() => dispatch(addRecent(SearchKeyword.searchValue))}
          SearchKeyword={SearchKeyword}
          handleSearchKeyword={handleSearchKeyword}
          SettingFocus={() => dispatch(SetFocus(true))}
        />
        <MapRecent
          Focus={Focus}
          recent={recent}
          setSearchKeyword={setSearchKeyword}
          RecentClick={(data) => dispatch(addRecent(data))}
          SettingRecent={(payload) => dispatch(DelRecent(payload))}
        />
      </_Wrapper>
      <SearchFocus
        Focus={Focus}
        SettingFocus={() => dispatch(SetFocus(false))}
      />
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
