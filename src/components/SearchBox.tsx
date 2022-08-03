import styled from "@emotion/styled";
import useSearcher from "../hooks/useSearcher";

function SearchBox() {
    const {Text,handleChange} = useSearcher()
  return (
    <SearchContainer>
      <InputContainer>
        <Input value={Text} onChange={handleChange}/>
        <SearchImg src="Search.svg" />
      </InputContainer>
      <RecentContainer>
        
      </RecentContainer>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  width: 560px;
  min-height: 56px;
  background-color: white;
  border-radius: 8px;
  
`;

const RecentContainer = styled.div`
    padding: 0 30px 0 30px;
`

const InputContainer = styled.div`
  padding: 0 30px 0 30px;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
`;

const SearchImg = styled.img`
  width: 25px;
  height: 25px;
`;

export default SearchBox;
