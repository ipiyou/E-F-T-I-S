import styled from "@emotion/styled/macro";
import useRecent from "../hooks/useRecent";
import SearchIcon from "../assets/Search";
import { ChangeEvent, FormEvent, useState } from "react";
import ReMoveIcon from "../assets/Back";
import useForm from "../hooks/useForm";


interface PropType{
  setSearch: (Search: boolean) => void
  Text: {searchValue: string}
  setText: (Text: {searchValue: string}) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function SearchBox({setSearch,Text,setText,handleChange}: PropType) {
  const [Focus, setFocus] = useState<boolean>(false);
  const { recent, AddRecent, DelRecent } = useRecent({setSearch});

  const ClickIcon = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AddRecent(Text.searchValue);
    setText({ searchValue: "" });
  };

  const RecentClick = (data: string) => {
    setText({ searchValue: data });
    AddRecent(data);
  };

  return (
    <>
      <_Wrapper>
        <_InputWrapper onSubmit={ClickIcon}>
          <_SearchInput
            value={Text.searchValue}
            name="searchValue"
            onChange={handleChange}
            onFocus={() => setFocus(true)}
          />
          <_SearchButton>
            <SearchIcon />
          </_SearchButton>
        </_InputWrapper>
        {Focus && (
          <_RecentWrapper>
            {recent.map((data) => (
              <_RecentItemWrapper style={{ padding: "10px 0" }}>
                <div onClick={() => RecentClick(data)}>{data}</div>
                <_SearchButton onClick={() => DelRecent(data)}>
                  <ReMoveIcon />
                </_SearchButton>
              </_RecentItemWrapper>
            ))}
          </_RecentWrapper>
        )}
      </_Wrapper>
      {Focus && <BackGroundFocus onClick={() => setFocus(false)}/>}
    </>
  );
}

const BackGroundFocus = styled.div`
  width:100%;
  height: 100%;
  position:absolute;
  z-index: 10;
`

const _RecentItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const _SearchButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
`;

const _RecentWrapper = styled.div`
  display: block;
  padding: 0 30px;
  overflow-y: scroll;
  max-height: 210px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const _SearchInput = styled.input`
  width: 100%;
  height: 50px;
`;

const _InputWrapper = styled.form`
  padding: 0 30px;
  display: flex;
  align-items: center;
`;

const _Wrapper = styled.div`
  position:relative;
  z-index: 15;
  width: 560px;
  min-height: 56px;
  background-color: white;
  border-radius: 8px;
`;

export default SearchBox;
