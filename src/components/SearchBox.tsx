import styled from "@emotion/styled";
import useRecent from "../hooks/useRecent";
import useForm from "../hooks/useForm";
import SearchIcon from "../assets/Search";
import { FormEvent } from "react";
import ReMoveIcon from '../assets/Back'

interface useFormType {
  searchValue: string;
}

function SearchBox() {
  const { Text, handleChange } = useForm<useFormType>({ searchValue: "" });
  const { recent, AddRecent, DelRecent } = useRecent();

  const ClickIcon = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    AddRecent(Text.searchValue);
  };
  return (
    <_Wrapper>
      <_InputWrapper onSubmit={ClickIcon}>
        <_SearchInput
          name="searchValue"
          onChange={handleChange}
        />
        <button style={{all: 'unset'}}>
          <SearchIcon />
        </button>
      </_InputWrapper>
      <_RecentWrapper>
        {recent.map((data) => (
          <div>{data}<ReMoveIcon /></div>
        ))}
      </_RecentWrapper>
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  width: 560px;
  min-height: 56px;
  background-color: white;
  border-radius: 8px;
`;

const _RecentWrapper = styled.div`
  padding: 0 30px;
`;

const _InputWrapper = styled.form`
  padding: 0 30px;
  display: flex;
  align-items: center;
`;

const _SearchInput = styled.input`
  width: 100%;
  height: 50px;
`;

const _SearchImg = styled.img`
  width: 25px;
  height: 25px;
`;

export default SearchBox;
