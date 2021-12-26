import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { InfoRow } from './info-row';

export const Header = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth;
            setWidth(newWidth);
        };

        window.addEventListener("resize", updateWindowDimensions);

        return () => window.removeEventListener("resize", updateWindowDimensions)

    }, []);

    return (
        <StyledContainer>

            <InfoRow />

        </StyledContainer>
    )
}
const StyledContainer = styled.div`
    width:100%;
`