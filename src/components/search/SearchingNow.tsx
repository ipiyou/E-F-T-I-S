import { ApiType } from "../../apis/GetItemAll";
import SearchItem from "../ItemList/SearchItem";

interface PropType {
  Search: boolean;
  BottomTouch: (sliceCount: number) => void;
  slice: ApiType | undefined;
}

function SearchingNow({ Search, BottomTouch, slice }: PropType) {
  return Search ? (
    <div style={{ marginTop: "100px" }}>검색 중...</div>
  ) : (
    <SearchItem slice={slice} BottomTouch={BottomTouch} />
  );
}

export default SearchingNow;
