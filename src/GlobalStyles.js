import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        font-family: 'Inter', sans-serif;
        background-color: black;
    }

    /* Custom styles for react-toastify toasts */
    .custom-toast-container {
        font-family: 'Inter', sans-serif;
        font-size: 0.758rem;
        color: #000;
        
    }

    .custom-toast {
        background-color: #ddd;
        border: 1px solid #2b2e2c;
        color: #fff;
        padding: 10px;
        border-radius: 0;
    }

 
    /* Custom scrollbar styles */
    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
        
    }

    ::-webkit-scrollbar-thumb {
        background-color: orange;
        border-radius: 0;
    }

    ::-webkit-scrollbar-track {
        background-color: #171717;
    }

    /* Custom scrollbar styles for Firefox */
    scrollbar-width: thin;
    scrollbar-color: orange transparent;

    /* Custom selection styles */
    ::selection {
        background-color: orange !important;
        color: black !important; /* Ensure the text is readable on a orange background */
    }

    ::-moz-selection {
        background-color: orange !important;
        color: black !important; /* Ensure the text is readable on a orange background */
    }

    /* Higher specificity to ensure selection color applies */
    body::selection, body *::selection {
        background-color: orange !important;
        color: black !important; /* Ensure the text is readable on a orange background */
    }

    body::-moz-selection, body *::-moz-selection {
        background-color: orange !important;
        color: black !important; /* Ensure the text is readable on a orange background */
    }
`;
