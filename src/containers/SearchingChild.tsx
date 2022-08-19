import styled from "@emotion/styled";
import { useEffect } from "react";
import InputForm from "../components/search/InputForm";
import MapRecent from "../components/search/MapRecent";
import useForm from "../hooks/useForm";
import SearchFocus from "../components/search/SearchFocus";
import SearchingNow from "../components/search/SearchingNow";
import { useAppDispatch, useAppSelector } from "../module";
import { addRecent, DelRecent, SetFocus } from "../module/recentReducer";
import { shallowEqual } from "react-redux";
import { GetItemThunk } from "../module/ItemListSlice";

export interface useFormType {
  searchValue: string;
}

function SearchingChild() {
  const { Focus, recent } = useAppSelector(
    (state) => state.recent,
    shallowEqual
  );
  const cureentItems = useAppSelector(
    (state) => state.item.cureentItems,
    shallowEqual
  );
  const dispatch = useAppDispatch();

  const [SearchKeyword, setSearchKeyword, handleSearchKeyword] =
    useForm<useFormType>({
      searchValue: "",
    });

  const SearchAdd = (keyWord: string) => {
    dispatch(GetItemThunk(keyWord));
    dispatch(addRecent(keyWord));
    dispatch(SetFocus(false));
  };

  const handleOnFocus = () => dispatch(SetFocus(true));
  const handleOffFocus = () => dispatch(SetFocus(false));

  const handleSearchAdd = (keyword: string) => SearchAdd(keyword);

  const handleDelRecent = (payload: string) => dispatch(DelRecent(payload));

  useEffect(() => {
    dispatch(GetItemThunk(""));
  }, []);

  return (
    <>
      <_Wrapper>
        <InputForm
          onSearch={handleSearchAdd}
          SearchKeyword={SearchKeyword}
          handleSearchKeyword={handleSearchKeyword}
          SettingFocus={handleOnFocus}
        />
        <MapRecent
          Focus={Focus}
          recent={recent}
          setSearchKeyword={setSearchKeyword}
          onSearch={handleSearchAdd}
          SettingRecent={handleDelRecent}
        />
      </_Wrapper>
      <SearchFocus Focus={Focus} SettingFocus={handleOffFocus} />
      <SearchingNow cureentItems={cureentItems} />
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
