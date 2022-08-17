import styled from "@emotion/styled";
import { ApiType } from "../../apis/GetItemAll";
import ReturnItemList from "../../containers/ReturnItemList";
import ExamName from "./ExamName";

interface PropType {
  cureentItems: ApiType[] | undefined;
}

function SearchItem({ cureentItems }: PropType) {
  return (
    <_Wrapper>
      {cureentItems?.length !== 0 && <ExamName />}
      <ReturnItemList cureentItems={cureentItems} />
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
