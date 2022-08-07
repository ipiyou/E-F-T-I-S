import styled from "@emotion/styled";

export const _RecentItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;

export const _RecentWrapper = styled.div`
  padding: 0 30px;
  overflow-y: scroll;
  max-height: 210px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const _SearchButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
`;


export const _SearchInput = styled.input`
  width: 100%;
  height: 50px;
  outline: 0;
  border:0;
  font-size:24px;

`;

export const _InputWrapper = styled.form`
  padding: 0 30px;
  display: flex;
  align-items: center;
`;