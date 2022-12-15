import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;

    section{
        display: flex;
        color: var(--blue);
        
        div{
            width: 15rem;
            height:  10rem;
            background-color: var(--bar);
            border-radius: 0.5rem;
            text-align: center;

            margin-top: 5rem;
            margin-left: 8rem;

            .Expand{
                position: absolute;
                margin-left: 11rem;
                margin-top: 0.5rem;
                cursor: pointer;
              }

            img{
                margin-top: 0.7rem;
                width: 10rem;
                height: 8rem;
            }
        }
    }
`