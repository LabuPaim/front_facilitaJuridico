import styled from "styled-components";
import { colors } from "../../styles";

export const Page = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    .containerButton{
        place-self: center;
        padding: 20px;
        width: 300px;
    }
`;
export const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    justify-content: center;
    align-items: start;
    height: max-content;
    gap: 20px;
    padding: 20px;
    width: 100%;
`;

export const Cards = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    height: 200px;
    gap: 5px;
    padding: 20px;
    border: 1px solid ${colors.preto};
`;
