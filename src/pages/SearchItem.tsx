import styled from "@emotion/styled";
import useScroll from "../hooks/useScroll";
import Item from "../components/itemList/Item";
import { ApiType } from "../apis/GetItemAll";

interface PropType {
  slice: ApiType | undefined;
  BottomTouch: (sliceCount: number) => void;
}

function SearchItem({ slice, BottomTouch }: PropType) {
  const setLastIntersectingImage = useScroll(BottomTouch);

  const Return = () => {
    if (slice) {
      return slice.items.length !== 0
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
        : "검색 결과가 없습니다";
    }
  };

  return <_Wrapper>{Return()}</_Wrapper>;
}

const _Wrapper = styled.div`
  width: 960px;
  background-color: #373633;
`;

export default SearchItem;
