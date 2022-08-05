import MainBox from "./components/MainBox";
import ItemBox from "./components/ItemList/ItemBox";
import SearchBox from "./components/SearchBox";
import useForm from "./hooks/useForm";
import { useState } from "react";

interface useFormType {
  searchValue: string;
}

function App() {
  const [Search,setSearch] = useState<boolean>(true);
  const { Text, setText, handleChange } = useForm<useFormType>({
    searchValue: "",
  });
  return (
    <MainBox>
      <SearchBox setSearch={setSearch} Text={Text} setText={setText} handleChange={handleChange}/>
      <ItemBox Search={Search} setSearch={setSearch} Text={Text}/>
    </MainBox>
  );
}

export default App;
