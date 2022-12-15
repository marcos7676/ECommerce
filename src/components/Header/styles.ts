import styled from "styled-components";


export const Container = styled.main`
    height: 150px;
    display: flex;
    box-shadow: 0 0 6px 1px gray;
    background-color: var(--bar);
    opacity: 0.6;
    padding: 1.5rem;

  header{
    display: flex;
    margin-left: 8rem;
  }
   
  svg{
    font-size: 7rem;
    cursor: pointer;  

    &:active{
      filter: brightness(1.5)
    }    
  }

  h6, h5{
    font-size: 3rem;
    font-family: "press Start 2P", cursive;
    text-align: center;
    text-shadow: 3px 0px 5px white;
    animation: shadow-titulo 3s ease-in-out infinite;
  }
   
  h6{
    color: var(--candy);
    margin-top: -1rem;
    margin-left: 5rem;

    &:first-letter{
      font-size: 5rem;
      color: var(--gold);
    }
    }

  h5{
    color: var(--gold);
    margin-top: 2.7rem;
    margin-left: -17.5rem;

    &:first-letter{
      font-size: 5rem;
      color: var(--candy);
    }
  }

  @keyframes shadow-titulo {
    0% {
      filter: drop-shadow(5px 5px 0px var(--blue));
    }

    33% {
      filter: drop-shadow(5px 5px 0px var(--candy));
    }

    66% {
      filter: drop-shadow(5px 5px 0px var(--gold));
    }

    100% {
      filter: drop-shadow(5px 5px 0px var(--blue));
    }
  }
`
