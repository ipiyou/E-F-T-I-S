import { ApiType } from "../apis/GetItemAll";
import Item from "../components/ItemList/Item";
import useScroll from "../hooks/useScroll";

interface PropType {
  slice: ApiType | undefined;
  BottomTouch: (sliceCount: number) => void;
}

function ReturnItemList({ slice, BottomTouch }: PropType) {
  const setLastIntersectingImage = useScroll(BottomTouch);
  return (
    <>
      {slice && slice.items.length !== 0
        ? slice.items.map((item, idx) => {
            if (idx === slice.items.length - 1) {
              return (
                <Item
                  key={idx}
                  item={item}
                  setLastIntersectingImage={setLastIntersectingImage}
                />
              );
            }
            return <Item key={idx} item={item} />;
          })
        : "검색 결과가 없습니다"}
    </>
  );
}

export default ReturnItemList;
