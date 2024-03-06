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
	padding: 0px 20px 20px;
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

	&:hover {
		background-color: ${colors.vermelho2};
	}
`;

export const Page = styled.div`
	display: grid;
	grid-template-columns: 1fr;
`;

export const ContainerCards = styled.table`
	border-collapse: collapse;
	width: 100%;

	thead {
		height: 50px;
		tr {
			th {
				padding: 10px;
			}
		}
	}

	tbody {
		border: 1px solid ${colors.cinza0};
		margin-top: 10px;
	}
`;

export const TableHeaderCell = styled.th`
	padding: 12px;
	text-align: left;
	background-color: ${colors.cinza0};
	color: ${colors.preto};
	border-bottom: 2px solid ${colors.preto};
`;

export const TableCell = styled.td`
	padding: 12px;
	text-align: left;
	border-bottom: 1px solid ${colors.cinza0};
	word-break: break-all;

	&:nth-child(even) {
		background-color: ${colors.cinza4};
	}

	&:last-child {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const Cards = styled.tr``;
