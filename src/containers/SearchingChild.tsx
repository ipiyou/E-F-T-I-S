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
import { shallowEqual } from "react-redux";
import { GetItemThunk, SliceNextItem } from "../module/ItemListSlice";

export interface useFormType {
  searchValue: string;
}

function SearchingChild() {
  const { Focus, recent, Search } = useAppSelector(
    (state) => state.recent,
    shallowEqual
  );
  const cureentItems = useAppSelector(
    (state) => state.item.cureentItems,
    shallowEqual
  );
  const dispatch = useAppDispatch();

  const { slice, ReturnSearchItem, BottomTouch } = useGetItem();
  const [SearchKeyword, setSearchKeyword, handleSearchKeyword] =
    useForm<useFormType>({
      searchValue: "",
    });

  const SearchAdd = (keyWord: string) => {
    dispatch(GetItemThunk(keyWord));
    dispatch(addRecent(keyWord));
    dispatch(SetFocus(false));
  };

  useEffect(() => {
    dispatch(GetItemThunk(""));
  }, []);

  return (
    <>
      <_Wrapper>
        <InputForm
          onSearch={(keyWord) => SearchAdd(keyWord)}
          SearchKeyword={SearchKeyword}
          handleSearchKeyword={handleSearchKeyword}
          SettingFocus={() => dispatch(SetFocus(true))}
        />
        <MapRecent
          Focus={Focus}
          recent={recent}
          setSearchKeyword={setSearchKeyword}
          onSearch={(keyWord) => SearchAdd(keyWord)}
          SettingRecent={(payload) => dispatch(DelRecent(payload))}
        />
      </_Wrapper>
      <SearchFocus
        Focus={Focus}
        SettingFocus={() => dispatch(SetFocus(false))}
      />
      <SearchingNow cureentItems={cureentItems} Search={Search} />
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
