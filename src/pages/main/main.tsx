import { Header } from 'features/common/organisms/header';
import React from 'react';
import styled from 'styled-components'; 
export const MainPage = () => {
    return(
        <StyledContainer>
            <Header/>
            <p>
                It is main page
            </p>
        </StyledContainer>
    )
}
const StyledContainer = styled.div`
    width: 100%;
`