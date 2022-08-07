import MainBox from "./components/MainBox";
import ItemBox from "./components/itemList/ItemBox";
import SearchBox from "./components/search/InputForm";
import SearchElement from "./pages/Search";
import useForm from "./hooks/useForm";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

export interface useFormType {
  searchValue: string;
}

function App() {
  const [Search, setSearch] = useState<boolean>(true);
  const [SearchKeyword, setSearchKeyword, handleSearchKeyword] =
    useForm<useFormType>({
      searchValue: "",
    });
  return (
    <MainBox>
      <SearchElement
        setSearch={setSearch}
        SearchKeyword={SearchKeyword}
        setSearchKeyword={setSearchKeyword}
        handleSearchKeyword={handleSearchKeyword}
      />
      <ItemBox Search={Search} setSearch={setSearch} Text={SearchKeyword} />
    </MainBox>
  );
}

export default App;
