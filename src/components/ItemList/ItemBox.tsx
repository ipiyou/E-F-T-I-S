import styled from "@emotion/styled";
import useGetItem from "../../hooks/useGetItem";
import useScroll from "../../hooks/useScroll";
import Item from "./Item";

interface PropType{
  Search: boolean;
  setSearch: (Search: boolean) => void;
  Text: {searchValue: string}
}

function  ItemBox({Search,setSearch,Text}: PropType) {
  const {slice} = useGetItem({Search,setSearch,Text})
  const [Scroll,ref] = useScroll()
  return <_Wrapper >
    {Search ? <img src="../../assets/tarkov.gif"/> : slice ? slice.items.map((item,idx) => <Item key={idx} item={item}/>) : "검색 결과가 없습니다"}
  </_Wrapper>;
}

const _Wrapper = styled.div`
  width: 960px;
  background-color:#373633;
`


export default ItemBox;
