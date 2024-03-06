import { useEffect, useState } from "react";
import * as S from "./style";
import { api } from "../../services/api";
import { Client } from "../../types";

export const Rota: React.FC = () => {
    const [dados, setDados] = useState<Client[]>();

    async function fetchAllData() {
        const allData = await api.GET("/fromOrigin");
        setDados(allData);
    }

    useEffect(() => {
        fetchAllData();
    }, []);

    return (
        <S.Page>
            <S.ContainerCards>
                {dados?.map((cliente, index) => (
                    <S.Cards>
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
    );
};
