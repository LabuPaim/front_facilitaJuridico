export enum TipoTypes {
	NULL= "NULL",
	SUCESS = "SUCESS",
	BAD = "BAD",
}

export type MensagemType = {
	isMensagem?: boolean;
	tipo?: TipoTypes;
	mensagem?: string;
	time?: number
};

export type MensagemStyle = {
	tipo: TipoTypes | undefined;
};
export type PaginacaoStyle = {
	hasPreNext: any;
};