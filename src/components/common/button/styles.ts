import styled from "styled-components";
import { ThemeValue, themeProps } from "../../../types/Theme";
import { colors } from "../../../styles";

export const ButtonStyle = styled.button<themeProps>`
    background: ${(props) =>
        props.bgColor ? props.bgColor : props.theme === ThemeValue.dark ? colors.azul3 : colors.azul1};
    color: ${colors.branco};
    border: 1px transparent;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: 0.5s;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 15px 30px;

    &:hover {
        background: ${(props) =>
            props.bgHoverColor ? props.bgHoverColor : props.theme === ThemeValue.dark ? colors.azul2 : colors.azul2};
        color: ${(props) =>
            props.txHoverColor ? props.txHoverColor : props.theme === ThemeValue.dark ? colors.branco : colors.azul1};
    }
`;
