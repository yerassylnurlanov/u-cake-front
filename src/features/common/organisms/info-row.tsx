import styled from 'styled-components'
import React from 'react'
import logo from 'assets/images/logo.svg'

export const InfoRow = ()=>{
    return(
        <StyledContainer>
            <StyledLogo src={logo}/>
        </StyledContainer>
    )
}


const StyledContainer = styled.div`
    display:flex;
    justify-content:space-between;
    padding:20px;
    background:#fff;
`
const StyledLogo = styled.img`
    max-width: 100px;
`