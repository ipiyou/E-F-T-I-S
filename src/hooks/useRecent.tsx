import { useState } from "react";

interface useFormType {
  searchValue: string;
}

function useRecent() {
  const local = localStorage.getItem("recent");

  const [recent, setRecent] = useState<string[]>(
    local ? JSON.parse(local) : []
  );
  const AddRecent = (str: string) => {
    let RECENTIN = [...recent];
    if (RECENTIN.includes(str)) {
      let arr = recent.filter((e) => e !== str);
      arr.unshift(str);
      setRecent(arr);
      localStorage.setItem("recent", JSON.stringify(arr));
    } else if (str !== "") {
      RECENTIN.push(str);
      setRecent(RECENTIN);
      localStorage.setItem("recent", JSON.stringify(RECENTIN));
    }
  };
  const DelRecent = (str: string) => {
    let RECENT = [...recent];
    let arr = RECENT.filter(e => e !== str)
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
