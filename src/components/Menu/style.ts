import styled from "styled-components";
import { colors } from "../../styles";

export const Page = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;

    background-color: ${colors.azul1};
    font-weight: 600;
    font-size: 1.2rem;

    a {
        padding: 40px 80px;
        cursor: pointer;
        transition: 0.4s;
        text-decoration: none;
        color: ${colors.branco};

        &:hover{
            color: ${colors.azul1};
            background-color: ${colors.laranja1};

        }
    }
`;
