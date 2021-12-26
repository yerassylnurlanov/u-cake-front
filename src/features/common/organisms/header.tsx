import React from 'react';
import styled from 'styled-components';
import { InfoRow } from './info-row';

export const Header = () => {
    return (
        <StyledContainer>
            <InfoRow />
        </StyledContainer>
    )
}
const StyledContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
`