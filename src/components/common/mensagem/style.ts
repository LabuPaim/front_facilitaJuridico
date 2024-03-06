import styled from "styled-components";
import { MensagemStyle, TipoTypes } from "../../../types";
import { colors } from "../../../styles";

export const ContainerMensagem = styled.div<MensagemStyle>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 50px;
    height: max-content;
    color: white;
    padding: 0 15px;
    font-size: 1.3rem;
    background-color: ${(props) => (props.tipo === TipoTypes.SUCESS ? colors.verde1 : colors.vermelho1)};
`;

export const Div_x = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
        background-color: ${colors.vermelho2}
    }
`;
