import { useState } from "react";

interface PropType {
  setSearch: (Search: boolean) => void;
}

function useRecent({ setSearch }: PropType) {
  const local = localStorage.getItem("recent");
  const [recent, setRecent] = useState<string[]>(
    local ? JSON.parse(local) : []
  );
  const AddRecent = (str: string) => {
    if (recent.includes(str)) {
      let arr = recent.filter((e) => e !== str);
      arr.unshift(str);
      setRecent(arr);
      localStorage.setItem("recent", JSON.stringify(arr));
        setSearch(true);
    } else if (str !== "") {
      recent.unshift(str);
      setRecent(recent);
      localStorage.setItem("recent", JSON.stringify(recent));
        setSearch(true);
    }
    setSearch(true)
  };
  const DelRecent = (str: string) => {
    let arr = recent.filter((e) => e !== str);
    setRecent(arr);
    localStorage.setItem("recent", JSON.stringify(arr));
  };

  return {
    recent,
    AddRecent,
    DelRecent,
  };
}

export default useRecent;
