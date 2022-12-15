import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --bar: #000524;
    --background: #243a69;
    --gold: #E4B302;
    --candy:#FC1A1A;
    --blue: #268FBE;
}

body{
    background-color: var(--background);
}

*{ 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    max-width: 100%;
}

.react-modal-overlay{
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}

.react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--blue);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
}

.react-modal-close{
    position: absolute;
    right: 1rem;
    top: 1rem;
    
    &:hover{
        opacity: 0.7;
        cursor: pointer;
    }
}
`