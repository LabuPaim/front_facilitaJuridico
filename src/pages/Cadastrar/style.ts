import styled from "styled-components";
import { colors } from "../../styles";

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 100%;

    .containerCadastro{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
`;

export const ContainerForm = styled.form`
    display: flex;
    border: 1px solid ${colors.preto};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    height: max-content;
`;

export const ContainerInput = styled.div`
    display: grid;
    grid-template-columns: 300px;
    gap: 20px;

    .container__localizacao {
        display: flex;
        gap: 8px;
        width: 100%;
    }
`;
