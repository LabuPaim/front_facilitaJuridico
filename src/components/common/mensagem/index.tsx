import { useContext, useEffect } from "react";
import { ContainerMensagem, Div_x } from "./style";
import { MensagemContext } from "../../../context";
import { TipoTypes } from "../../../types";

export const Mensagem = () => {
	const { mensagem, setMensagem } = useContext(MensagemContext);

	if (!setMensagem) {
		throw new Error("setMensagem não foi fornecido corretamente");
	}

	function handleFechar() {
		if (setMensagem) {
			setMensagem({ isMensagem: false, tipo: TipoTypes.SUCESS, mensagem: "" });
		}
	}

	useEffect(() => {
		if (mensagem.isMensagem) {
			const timeoutId = setTimeout(() => {
				if (setMensagem) {
					setMensagem({
						isMensagem: false,
						tipo: TipoTypes.SUCESS,
						mensagem: "",
					});
				}
			}, mensagem.time);
			window.scrollTo(0, 0);

			return () => clearTimeout(timeoutId);
		}
	}, [mensagem, setMensagem]);

	return (
		<>
			{mensagem.isMensagem && (
				<ContainerMensagem tipo={mensagem.tipo}>
					<Div_x></Div_x>
					<div dangerouslySetInnerHTML={{ __html: mensagem.mensagem || "" }} />
					<Div_x onClick={handleFechar}>
						X
					</Div_x>
				</ContainerMensagem>
			)}
		</>
	);
};

