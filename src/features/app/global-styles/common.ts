import { createGlobalStyle } from 'styled-components';

export const Common = createGlobalStyle`
    html {
        font-family: 'Gilroy', 'Calibri', sans-serif;
        font-size: 16px;
        box-sizing: border-box;
    }
    *, *:before, *:after {
       box-sizing: inherit;
    }
    body {
        overflow-x: hidden;
        overflow-y: scroll;
        line-height: 1.15;
        color: #000000;
        background-color: #F9FBFF;
        margin: 0;

    }
    p{
        margin: 0;
    }
    #modal-root{
        position: relative;
    }
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }



    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

`;
