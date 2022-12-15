import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    display: flex;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 10rem;
    color: white;
    text-align: center;
    flex-shrink: 0;
    
    .contato{
        text-align: center;
        margin-left: 0.5rem;
        margin-top: 3rem;
        font-weight: bold;

        h6{
            font-size: 1.5rem;
        }

        h5{
            text-align: left;
        }

        svg{
        font-size: 1.5rem;
        margin-top: 1rem;
        cursor: pointer;
        }

        p{
            margin-top: -1.5rem;
            margin-left: 2.5rem;
        }
    }
`