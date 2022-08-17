import { ApiType } from "../apis/GetItemAll";
import Item from "../components/ItemList/Item";
import useScroll from "../hooks/useScroll";

interface PropType {
  cureentItems: ApiType[] | undefined;
}

function ReturnItemList({ cureentItems }: PropType) {
  const setLastIntersectingImage = useScroll();
  return (
    <>
      {cureentItems && cureentItems.length !== 0
        ? cureentItems.map((item, idx) => {
            if (idx === cureentItems.length - 1) {
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
