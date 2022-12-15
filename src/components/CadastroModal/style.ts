import styled from "styled-components";

export const Container = styled.form`
    text-align: center;
    justify-content: center;

    h2{
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input{
        width: 90%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;
        margin-top: 1rem;

        border: 1px solid #d7d7d7;
        background: var(--bar);
        color: var(--blue);

        font-weight: bold;
        font-size: 1rem;

        &::placeholder{
            color: var(--blue);
        }

        & + input{
            margin-top: 1rem;
        }
    }
    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        font-size: 1rem;
        font-weight: bold;
        margin-top: 1rem;
        border-radius: 0.25rem;
        border: 0;
        color: var(--blue);
        background: var(--bar);

        &:hover{
            filter: brightness(0.8);
            box-shadow: 3px 3px 0 0px var(--blue);
            cursor: pointer
        }

        &:active{
            filter: brightness(1.5);
            box-shadow: 0 0 10px 5px var(--blue);
        }
    }

    .form-control small{
        visibility: hidden;
    }

    .form-control.erro small{
        visibility: visible;
        color: red;
    }

    

`