import styled from "@emotion/styled";
import { FunctionComponent } from "react";

interface PropType {
    children: React.ReactNode
}

export const MainBox: FunctionComponent<PropType> = ({children}) => {
    return(
        <MainContainer>
            <Title>E  F  T  I  S</Title>
            {children}
        </MainContainer>
    );
}

const MainContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`

const Title = styled.span`
    font-size: 60px
`