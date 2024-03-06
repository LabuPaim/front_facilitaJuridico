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
								<thead>
									<tr>
										<th>#</th>
										<th>Nome</th>
										<th>Email</th>
										<th>Telefone</th>
										<th>Localização</th>
									</tr>
								</thead>
								<tbody>
									{dados?.map((cliente, index) => (
										<S.Cards key={index}>
											<S.TableCell>{index + 1}</S.TableCell>
											<S.TableCell>{cliente.name}</S.TableCell>
											<S.TableCell>{cliente.email}</S.TableCell>
											<S.TableCell>{cliente.telefone}</S.TableCell>
											<S.TableCell className="center">
												{cliente.coordenadax}, {cliente.coordenaday}
											</S.TableCell>
										</S.Cards>
									))}
								</tbody>
							</S.ContainerCards>
						</S.Page>
					</S.ModalContent>
				</S.ModalOverlay>
			)}
		</>
	);
};
