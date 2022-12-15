import styled from "styled-components";

export const Container = styled.div`
div{
    display: flex;
    font-family: "press Start 2P", cursive;
    color: var(--candy);
    opacity: 0.8;

    .Return{
        font-size: 3rem;
        color: var(--bar);

        position: absolute;
        margin-top: 1rem;
        margin-left: 1rem;
    }

    h6{
        font-size: 1.3rem;
        margin-top: 9rem;
        margin-left: 22rem;
        position: relative;
    }

    img{
        width: 16rem;
        height: 12rem;
        margin-top: 5rem;
        margin-left: 5rem;
        
        position: absolute;
    }
    
    section{
        margin-top: 18rem;
        margin-left: 7.5rem;
        padding: 0.7rem;

        width: 10rem;
        height: 3rem;
        border-radius: 0.5rem;

        font-size: 1.8rem;       
        text-align: center;

        position: absolute;

        box-shadow: 0 0 5px 2px var(--gold);

        cursor: pointer;
    }
}
`
