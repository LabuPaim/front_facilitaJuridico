import { useEffect, useState } from "react";
import * as S from "./style";
import { Client } from "../../types";
import { api } from "../../services/api";

interface ModalRotaProps {
    modal: boolean;
    setModal: (value: boolean) => void;
}

export const ModalRota: React.FC<ModalRotaProps> = ({ modal, setModal }) => {
    const [dados, setDados] = useState<Client[]>();

    async function fetchAllData() {
        const allData = await api.GET("/fromOrigin");
        setDados(allData);
    }

    useEffect(() => {
        fetchAllData();
    }, []);

    return (
        <>
            {modal && (
                <S.ModalOverlay>
                    <S.ModalContent>
                        <S.ModalClose onClick={() => setModal(false)}>X</S.ModalClose>
                        <S.Page>
                            <S.ContainerCards>
                                {dados?.map((cliente, index) => (
                                    <S.Cards key={index}>
                                        <div>{index + 1}</div>
                                        <div>Nome: {cliente.name}</div>
                                        <div>Email: {cliente.email}</div>
                                        <div>Telefone: {cliente.telefone}</div>
                                        <div>
                                            Localização: {cliente.coordenadax}, {cliente.coordenaday}
                                        </div>
                                    </S.Cards>
                                ))}
                            </S.ContainerCards>
                        </S.Page>
                    </S.ModalContent>
                </S.ModalOverlay>
            )}
        </>
    );
};
