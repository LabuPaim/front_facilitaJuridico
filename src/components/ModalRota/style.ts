import styled from "styled-components";
import { colors } from "../../styles";

export const ModalOverlay = styled.div`
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

export const ModalContent = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: max-content;
    max-height: 80%;
    overflow-y: auto;
`;

export const ModalClose = styled.div`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    background-color: ${colors.vermelho1};
    color: ${colors.branco};
    padding: 6px 16px;
    border-radius: 3px;
    font-size: 1.4rem;
    transition: 0.4s;

    &:hover{
        background-color: ${colors.vermelho2};
    }
`;

export const Page = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`;
export const ContainerCards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    height: max-content;
    width: max-content;
`;

export const Cards = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 20px 200px 300px 200px 200px;
    gap: 15px;
`;
