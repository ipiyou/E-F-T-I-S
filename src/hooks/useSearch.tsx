import { useState } from "react";

function useSearch() {
  const local = localStorage.getItem("recent");
  const [recent, setRecent] = useState<string[]>(
    local ? JSON.parse(local) : []
  );
  const [Search, setSearch] = useState<boolean>(true);
  const AddRecent = (str: string) => {
    let arr = recent
    if (recent.includes(str)) {
      arr = arr.filter((e) => e !== str);
    }
    if (str !== "") {
      arr.unshift(str);
      setRecent(arr);
      localStorage.setItem("recent", JSON.stringify(arr));
    }
    setSearch(true)
  };
  const DelRecent = (str: string) => {
    let arr = recent.filter((e) => e !== str);
    setRecent(arr);
    localStorage.setItem("recent", JSON.stringify(arr));
  };
  const CompleteSearch = () =>{
    setSearch(false);
  }

  return {
    recent,
    AddRecent,
    DelRecent,
    Search,
    CompleteSearch
  };
}

export default useSearch;