import styled from "styled-components";

export const Container = styled.main`
    margin: 0 auto;
    margin-top: 8rem;
    padding: 2.5rem 1rem;

    h6, h5{
        font-size: 10rem;
        font-family: "press Start 2P", cursive;
        text-align: center;
        text-shadow: 5px 0px 10px white;
        animation: shadow-titulo-home 3s ease-in-out infinite;
        display: absolute;
        margin-top: -5rem;

    }

    h6{
        color: var(--candy);
        margin-left: 5rem;

        &:first-letter{
            font-size: 15rem;
            color: var(--gold);
        }
    }

    h5{
        color: var(--gold);
        margin-right: 6rem;
        margin-top: -4.5rem;
       
        &:first-letter{
            font-size: 15rem;
            color: var(--candy);
        }
    }

    @keyframes shadow-titulo-home {
    0% {
        filter: drop-shadow(10px 10px 0px var(--blue));
    }

    33% {
        filter: drop-shadow(10px 10px 0px var(--candy));
    }

    66% {
        filter: drop-shadow(10px 10px 0px var(--gold));
    }

    100% {
        filter: drop-shadow(10px 10px 0px var(--blue));
    }
}
`;
