import { CommonTemplate } from 'features/common/common-template';
import React from 'react';
import styled from 'styled-components';

export const MainPage = () => {
    return (
        <CommonTemplate>
            <StyledContainer>
                <p>
                    It is main page
                </p>
            </StyledContainer>
        </CommonTemplate>

    )
}
const StyledContainer = styled.div`
    width: 100%;
`