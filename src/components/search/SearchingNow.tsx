import { ApiType } from "../../apis/GetItemAll";
import { useAppSelector } from "../../module";
import SearchItem from "../ItemList/SearchItem";

interface PropType {
  cureentItems: ApiType[] | undefined;
}

function SearchingNow({ cureentItems }: PropType) {
  const { loading, error } = useAppSelector((state) => state.item);
  return loading ? (
    <div style={{ marginTop: "100px" }}>{error ? "오류." : "검색 중..."}</div>
  ) : (
    <SearchItem cureentItems={cureentItems} />
  );
}

export default SearchingNow;
