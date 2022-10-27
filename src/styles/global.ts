import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #202024;
        --background-secundario: #121214;

        --green: #00875F;
        --green-dark: #015F43;
        --green-light: #00B37E;

        --red: #F75A68;
        --red-dark: #AA2834;

        --shape: #202024;
        --shape-secundario: #29292E;
        --shape-terciario: #323238;

        --placeholder: #7C7C8A;

        --text-body: #C4C4CC;
        --text-title: #E1E1E6;

    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    // font-size: 16px(desktop)
    html{
        @media(max-width: 1080px){
            font-size: 93.75%; //15px
        }

        @media(max-width: 720px){
            font-size: 87.5%; //14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;