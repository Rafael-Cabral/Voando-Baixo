import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        font-size: 62.5%;
    }

    * {

        margin: 0;
        padding: 0;
        border: none;
        outline: none;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
        
        animation: fadeIn ease 1s;
        -webkit-animation: fadeIn ease 1s;
        -moz-animation: fadeIn ease 1s;
        -o-animation: fadeIn ease 1s;
        -ms-animation: fadeIn ease 1s;

        @keyframes fadeIn {
            0% {opacity:0;}
            100% {opacity:1;}
        }

        @-moz-keyframes fadeIn {
            0% {opacity:0;}
            100% {opacity:1;}
        }

        @-webkit-keyframes fadeIn {
            0% {opacity:0;}
            100% {opacity:1;}
        }

        @-o-keyframes fadeIn {
            0% {opacity:0;}
            100% {opacity:1;}
        }

        @-ms-keyframes fadeIn {
            0% {opacity:0;}
            100% {opacity:1;}
        }

    }

    body {

        background-color: #F8F8FA;

    }

`