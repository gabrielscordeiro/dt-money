import styled from "styled-components";

export const Container = styled.header`
    background: #121214;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1240px;
    margin: 0 auto;
    padding: 32px 16px 176px;

    button {
        font-size: 1rem;
        color: #fff;
        background: var(--green);
        padding: 12px 20px;
        font-weight: 700;
        border-radius: 6px;
        transition: 0.2s all linear;

        &:hover{
            background: var(--green-dark);
        }
    } 
`;