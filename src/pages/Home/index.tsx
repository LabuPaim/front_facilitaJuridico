import { useEffect, useState } from "react";
import * as S from "./style";
import { api } from "../../services/api";
import { Client } from "../../types";
import { ModalRota } from "../../components/ModalRota";
import { CustomButton } from "../../components/common";
import { colors } from "../../styles";

export const Home: React.FC = () => {
    const [dados, setDados] = useState<Client[]>();
    const [modal, setModal] = useState<boolean>(false);

    async function fetchAllData() {
        const allData = await api.GET("");
        setDados(allData);
    }

    useEffect(() => {
        fetchAllData();
    }, []);

    return (
        <S.Page>
            <div className="containerButton">
                <CustomButton
                    type="button"
                    label="Traçar Rota"
                    bgHoverColor={colors.laranja2}
                    txHoverColor={colors.azul1}
                    onClick={() => setModal(true)}
                />
            </div>
            <S.ContainerCards>
                {dados?.map((cliente) => (
                    <S.Cards>
                        <div>Nome: {cliente.name}</div>
                        <div>Email: {cliente.email}</div>
                        <div>Telefone: {cliente.telefone}</div>
                        <div>
                            Localização: {cliente.coordenadax}, {cliente.coordenaday}
                        </div>
                    </S.Cards>
                ))}
            </S.ContainerCards>
            {modal && <ModalRota modal={modal} setModal={setModal}/>}
        </S.Page>
    );
};
