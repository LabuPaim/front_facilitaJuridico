"use client";
import { useContext } from "react";
import { CustomButton, CustomInput } from "../../components/common";
import * as S from "./style";
import { colors } from "../../styles";
import { api } from "../../services/api";
import { MensagemContext } from "../../context";
import { TipoTypes } from "../../types";
import { Mensagem } from "../../components/common";

export default function Cadastrar() {
    const { setMensagem } = useContext(MensagemContext);

    async function registrar(e: any) {
        e.preventDefault();

        const name = e.currentTarget.nNome.value;
        const email = e.currentTarget.nEmail.value;
        const telefone = e.currentTarget.ntelefone.value;
        const coordenadax = e.currentTarget.nCoordenadaX.value;
        const coordenaday = e.currentTarget.nCoordenadaY.value;

        api.POST("", { name, email, telefone, coordenadax, coordenaday })
            .then((data) => {
                if (data) {
                    setMensagem &&
                        setMensagem({
                            isMensagem: true,
                            tipo: TipoTypes.SUCESS,
                            mensagem: "Cliente Cadastrado",
                            time: 4000,
                        });
                } else {
                    setMensagem &&
                        setMensagem({
                            isMensagem: true,
                            tipo: TipoTypes.BAD,
                            mensagem: "Cliente não pode ser cadastrado",
                            time: 4000,
                        });
                }
            })
            .catch((error) => {
                if (setMensagem) {
                    setMensagem({
                        isMensagem: true,
                        tipo: TipoTypes.BAD,
                        mensagem: "Cliente não pode ser cadastrado",
                        time: 4000,
                    });
                }
            });
    }
    return (
        <S.Page onSubmit={registrar}>
            <Mensagem />
            <S.ContainerForm>
                <S.ContainerInput>
                    <h3>Contato:</h3>
                    <CustomInput label="" name="nNome" type="text" placeholder="Nome" required />
                    <CustomInput label="" name="nEmail" type="email" placeholder="Email" required />
                    <CustomInput label="" name="nTelefone" type="text" placeholder="Telefone" required />
                    <div>
                        <h3>Localização:</h3>
                        <div className="container__localizacao">
                            <CustomInput
                                label=""
                                name="nCoordenadaX"
                                type="number"
                                placeholder="CoordenadaX"
                                required
                            />
                            <CustomInput
                                label=""
                                name="nCoordenadaY"
                                type="number"
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
        </S.Page>
    );
}
