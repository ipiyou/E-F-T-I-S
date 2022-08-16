import styled from "@emotion/styled";

interface PropType {
  Focus: boolean;
  SettingFocus: () => void;
}

function SearchFocus({ Focus, SettingFocus }: PropType) {
  if (Focus) {
    return <BackGroundFocus onClick={SettingFocus} />;
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
