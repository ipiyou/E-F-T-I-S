import { useState } from "react";
import { ApiInterface, GetItemAll } from "../apis/GetItemAll";
import { ApiType } from "../apis/GetItemAll";

function useGetItem() {
  const [slice, setSlice] = useState<ApiInterface>();
  const [cureentItem, setItem] = useState<ApiInterface>();
  const ReturnSearchItem = (
    str: string,
    Searching: (onoff: boolean) => void
  ) => {
    GetItemAll(str).then((data: ApiInterface) => {
      let sliceData = { items: data.items.splice(0, 20) };
      setSlice(sliceData);
      setItem(data);
      Searching(false);
    });
  };
  const BottomTouch = (sliceCount: number) => {
    if (
      slice &&
      cureentItem &&
      slice.items !== [] &&
      cureentItem.items !== []
    ) {
      let NextItem = cureentItem.items.splice(-sliceCount);
      setSlice({ items: [...slice.items, ...NextItem] });
    }
  };
  return { slice, ReturnSearchItem, BottomTouch };
}

export default useGetItem;
