'use client'
import React, { useState, ReactNode } from "react";
import { MensagemType } from "../../types";

type MensagemProviderProps = {
	children: ReactNode;
};

export const MensagemContext = React.createContext<{
	mensagem: MensagemType;
	setMensagem: React.Dispatch<React.SetStateAction<MensagemType>> | undefined;
}>({
	mensagem: {
		time: 3000,
	},
	setMensagem: undefined,
});

export const MensagemProvider = ({ children }: MensagemProviderProps) => {
	const [mensagem, setMensagem] = useState<MensagemType>({});

	return <MensagemContext.Provider value={{ mensagem, setMensagem }}>{children}</MensagemContext.Provider>;
};
