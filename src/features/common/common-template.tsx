import React from 'react';
import { Header } from './organisms/header';
import styled from 'styled-components';

export const CommonTemplate = ({ children }) => {
    return (
        <StyledContainer>
            <Header />
            {children}
        </StyledContainer>
    )
}

const StyledContainer = styled.div`
    display:flex;
    flex-direction:column;
`