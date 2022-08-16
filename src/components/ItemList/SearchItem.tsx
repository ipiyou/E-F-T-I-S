import styled from "@emotion/styled";
import { ApiType } from "../../apis/GetItemAll";
import ReturnItemList from "../../containers/ReturnItemList";
import ExamName from "./ExamName";

interface PropType {
  slice: ApiType | undefined;
  BottomTouch: (sliceCount: number) => void;
}

function SearchItem({ slice, BottomTouch }: PropType) {
  return (
    <_Wrapper>
      {slice?.items.length !== 0 && <ExamName />}
      <ReturnItemList slice={slice} BottomTouch={BottomTouch} />
    </_Wrapper>
  );
}

const _Wrapper = styled.div`
  width: 1080px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default SearchItem;
