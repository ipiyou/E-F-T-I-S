import { useState } from "react";
import { GetItemAll } from "../apis/GetItemAll";
import { ApiType } from "../apis/GetItemAll";

function useGetItem() {
  const [slice, setSlice] = useState<ApiType>();
  const ReturnSearchItem = (
    str: string,
    Searching: (onoff: boolean) => void
  ) => {
    GetItemAll(str).then((data) => setSlice(data));
    Searching(false);
  };
  return { slice, ReturnSearchItem };
}

export default useGetItem;
