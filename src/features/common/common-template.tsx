import React, { useState } from 'react';
import { Header } from './organisms/header';
import styled from 'styled-components';
import { useEffect } from 'react';

export const CommonTemplate = ({ children }) => {
    const [width, setWidth] = useState(null);

    useEffect(() => {
        
        const newWidth = window.innerWidth;
        setWidth(getContentWidth(newWidth));
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth;
            setWidth(getContentWidth(newWidth));
            
        };
        window.addEventListener("resize", updateWindowDimensions);

        return () => window.removeEventListener("resize", updateWindowDimensions)

    }, []);

    
    return (
        <StyledContainer width={width}>
            <Header />
            {children}
        </StyledContainer>
    )
}

const getContentWidth = (screenWidth:number) =>{
   
    if(screenWidth>1201){
        return 1000;
    }
    else if(screenWidth>1000){
        return 900;
    }
    else{
        return screenWidth
    }
}

interface StyledContainerProps {
    width: number;
}

const StyledContainer = styled('div') <StyledContainerProps>`
    display:flex;
    flex-direction:column;
    max-width:${({ width }) => width > 0 ? width + 'px' : 'auto'};
    margin:auto;
`