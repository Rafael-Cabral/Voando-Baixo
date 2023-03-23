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
        text-decoration: none;

    }

    body {

        background-color: #F8F8FA;

    }

    /* input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    } */

    /* input[type=number] {
        -moz-appearance: textfield;
    } */

    .notyf__toast {
        max-width: 55rem !important;
    }

    .notyf__message {
        font-size: 1.6rem !important;
    }

    .map-container {
        height: 100%;
        overflow: hidden;
    }

    .mapboxgl-ctrl-logo, .mapboxgl-ctrl-attrib {
        display: none !important;
    }

    .mapboxgl-ctrl-group:not(:empty) {
        box-shadow: none !important;
    }

`