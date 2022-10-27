import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: -160px;
    gap: 32px;


    div{
        width: 100%;
        padding: 24px;
        padding-left: 32px;
        background: var(--shape-terciario);
        color: var(--text-body);
        border-radius: 6px;

        &.highlight-background{
            background: var(--green-dark);
        }

        header{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        strong{
            display: block;
            font-size: 32px;
            color: var(--text-title);
            margin-top: 12px;
            font-weight: 700;
            line-height: 140%;
        }
    }
`;