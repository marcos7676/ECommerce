import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    img{
        width: 18rem;
        height: 20rem;
        margin-top: 2rem;
        margin-left: 2rem;
        border-radius: 1rem;
    }

    div{
        width: 36rem;
        height: 20rem;
        margin-left: 1.5rem;
        background-color: var(--bar);
        color: var(--gold);
        border-radius: 0.5rem;
        opacity: 0.7;
        box-shadow: 0 5px 0 5px black;
        position: absolute;
        

        h6{
            font-size: 2rem;
            position: block;
            text-align: center;
            margin-top: 1rem;
        }

        p{
            margin-top: 2rem;
            margin-left: 1rem;
            margin-right: 5rem;
            font-size: 1rem;
        }
    }

    .trajetoria{
        margin-top: 2rem;
        margin-left: 25rem;
    }

    .projeto{
        margin-top: 18rem;
        margin-left: 27rem;
    }

    .aprendizado{
        margin-top: 5rem;
        margin-left: 58rem;
    }
`