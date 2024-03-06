import styled from "styled-components";
import { ThemeValue, themeProps } from "../../../types/Theme";
import { colors } from "../../../styles";



export const Page = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	place-content: center;
	place-items: start;
	gap: 4px;
	width: 100%;
	height: 100%;
`;

export const Label = styled.label<themeProps>`
	display: flex;
	place-items: center;
	gap: 4px;
	width: 100%;
	color: ${(props) => (props.theme === ThemeValue.dark ? colors.branco : colors.preto1)};

	svg {
		width: 20px;
		max-height: 20px;
	}
`;

export const InputStyle = styled.input<themeProps>`
	width: 100%;
	border: none;
	border-radius: 3px;
	height: 40px;
	padding-left: 8px;
	font-size: 1rem;
	background: ${(props) => (props.theme === ThemeValue.dark ? colors.cinza0 : colors.cinza4)};
	color: ${(props) => (props.theme === ThemeValue.dark ? colors.branco0 : colors.cinza0)};

	::placeholder {
		font-size: 1rem;
		font-weight: 600;
	}
`;

export const TextareaStyle = styled.textarea<themeProps>`
	width: 100%;
	border: none;
	resize: none;
	border-radius: 3px;
	height: 100px;
	background: ${(props) => (props.theme === ThemeValue.dark ? colors.cinza0 : colors.branco0)};
	color: ${(props) => (props.theme === ThemeValue.dark ? colors.branco0 : colors.cinza0)};
`;

export const H3Style = styled.h3`
	width: 100%;
	font-size: 1.3rem;
	font-weight: 600;
`;
