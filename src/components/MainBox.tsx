import styled from "@emotion/styled";

interface PropType {
  children: React.ReactNode;
}

const MainBox = ({ children }: PropType) => {
  return (
    <MainContainer>
      <Title>E F T I S</Title>
      {children}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.span`
  font-size: 60px;
`;

export default MainBox;
