import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import SearchIcon from "../../assets/Search";
import * as S from "./style";

interface PropType {
  ClickIcon: (e: FormEvent<HTMLFormElement>) => void;
  SearchKeyword: { searchValue: string };
  handleSearchKeyword: (e: ChangeEvent<HTMLInputElement>) => void;
  SettingFocus: () => void;
}

function InputForm({
  ClickIcon,
  SearchKeyword,
  handleSearchKeyword,
  SettingFocus,
}: PropType) {
  return (
    <>
      <S._InputWrapper onSubmit={ClickIcon}>
        <S._SearchInput
          value={SearchKeyword.searchValue}
          name="searchValue"
          onChange={handleSearchKeyword}
          onFocus={SettingFocus}
        />
        <S._SearchButton>
          <SearchIcon />
        </S._SearchButton>
      </S._InputWrapper>
    </>
  );
}

export default InputForm;
