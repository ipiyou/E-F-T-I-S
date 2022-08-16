import styled from "@emotion/styled";

interface PropType {
  Focus: boolean;
  CloseBackground: () => void;
}

function SearchFocus({ Focus, CloseBackground }: PropType) {
  if (Focus) {
    return <BackGroundFocus onClick={CloseBackground} />;
  }
  return null;
}

const BackGroundFocus = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
`;

export default SearchFocus;
