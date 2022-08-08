import { useState } from "react";

function useSearch() {
  const local = localStorage.getItem("recent");
  const [recent, setRecent] = useState<string[]>(
    local ? JSON.parse(local) : []
  );
  const AddRecent = (str: string, Searching: (onoff: boolean) => void) => {
    let arr = recent;
    if (recent.includes(str)) {
      arr = arr.filter((e) => e !== str);
    }
    if (str !== "") {
      arr.unshift(str);
      setRecent(arr);
      localStorage.setItem("recent", JSON.stringify(arr));
    }
    Searching(true);
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

export default useSearch;
