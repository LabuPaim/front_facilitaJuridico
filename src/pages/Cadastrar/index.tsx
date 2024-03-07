"use client";
import { useContext, useState } from "react";
import { CustomButton, CustomInput } from "../../components/common";
import * as S from "./style";
import { colors } from "../../styles";
import { api } from "../../services/api";
import { MensagemContext } from "../../context";
import { InputTypes, MaskTypes, TipoTypes } from "../../types";
import { Mensagem } from "../../components/common";
import { mascara } from "../../utils";

export function Cadastrar() {
	const { setMensagem } = useContext(MensagemContext);

	const [nome, setNome] = useState("");
	const [email, setEmail] = useState("");
	const [telefone, setTelefone] = useState("");
	const [coordenadaX, setCoordenadaX] = useState("");
	const [coordenadaY, setCoordenadaY] = useState("");

	async function registrar(e: any) {
		e.preventDefault();

		try {
			const response = await api.POST("", {
				name: nome,
				email: email,
				telefone: telefone,
				coordenadax: parseInt(coordenadaX),
				coordenaday: parseInt(coordenadaY),
			});

			if (response) {
				setMensagem &&
					setMensagem({
						isMensagem: true,
						tipo: TipoTypes.SUCESS,
						mensagem: "Cliente Cadastrado",
						time: 4000,
					});
			}
		} catch (error) {
			console.error("Erro ao cadastrar cliente:", error);
			setMensagem &&
				setMensagem({
					isMensagem: true,
					tipo: TipoTypes.BAD,
					mensagem: "Cliente não pode ser cadastrado",
					time: 4000,
				});
		}
	}
	return (
		<S.Page onSubmit={registrar}>
			<Mensagem />
			<div className="containerCadastro">
				<S.ContainerForm>
					<S.ContainerInput>
						<h3>Contato:</h3>
						<CustomInput
							label=""
							name="nNome"
							value={nome}
							type={InputTypes.text}
							placeholder="Nome"
							required
							onChange={(e) => setNome(e)}
						/>
						<CustomInput
							label=""
							name="nEmail"
							value={email}
							type={InputTypes.email}
							placeholder="Email"
							required
							onChange={(e) => setEmail(e)}
						/>
						<CustomInput
							label=""
							value={telefone}
							name="nTelefone"
							maxLength={15}
							type={InputTypes.text}
							placeholder="Telefone"
							required
							onChange={(e) => setTelefone(mascara(MaskTypes.CELULAR, e))}
						/>
						<div>
							<h3>Localização:</h3>
							<div className="container__localizacao">
								<CustomInput
									label=""
									name="nCoordenadaX"
									value={coordenadaX}
									onChange={(e) => setCoordenadaX(mascara(MaskTypes.INTERGER, e))}
									type={InputTypes.text}
									placeholder="CoordenadaX"
									required
								/>
								<CustomInput
									label=""
									name="nCoordenadaY"
									value={coordenadaY}
									onChange={(e) => setCoordenadaY(mascara(MaskTypes.INTERGER, e))}
									type={InputTypes.text}
									placeholder="CoordenadaY"
									required
								/>
							</div>
						</div>
					</S.ContainerInput>
					<CustomButton
						type="submit"
						label="Registrar"
						bgHoverColor={colors.laranja2}
						txHoverColor={colors.azul1}
					/>
				</S.ContainerForm>
			</div>
		</S.Page>
	);
}
