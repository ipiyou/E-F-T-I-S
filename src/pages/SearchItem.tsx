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

  return (
    <_Wrapper>
      {slice?.items.length !== 0 && <div>
        <ExamListName>이름</ExamListName>
        <ExamListItem>칸성비</ExamListItem>
        <ExamListItem>상인 판매</ExamListItem>
        <ExamListItem>플리 판매</ExamListItem>
        <ExamListItem>가격 변동</ExamListItem>
      </div>}
      {Return()}
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  width: 1080px;
  margin-top:100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExamListName = styled.span`
  font-size: 18px;
  padding: 0 267px;
`;

const ExamListItem = styled.span`
  font-size: 18px;
  padding: 0 15px;
`;

export default SearchItem;
