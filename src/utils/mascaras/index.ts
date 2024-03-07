import { MaskTypes } from "../../types";

export function mascara(tipo: MaskTypes, dados: string): string {
	if (!dados) return "";

	if (tipo === MaskTypes.CNPJ) {
		return cnpj_mask(dados);
	}
	if (tipo === MaskTypes.CPF) {
		return cpf_mask(dados);
	}
	if (tipo === MaskTypes.CEP) {
		return cep_mask(dados);
	}
	if (tipo === MaskTypes.CELULAR) {
		return celular_mask(dados);
	}

	if (tipo === MaskTypes.INTERGER) {
		return integer_mask(dados);
	}

	return dados;
}

const cpf_mask = (v: string) => {
	v = v.replace(/\D/g, "");
	v = v.replace(/(\d{3})(\d)/, "$1.$2");
	v = v.replace(/(\d{3})(\d)/, "$1.$2");
	v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
	return v;
};

const cnpj_mask = (v: string) => {
	v = v.replace(/\D/g, "");
	v = v.replace(/^(\d{2})(\d)/, "$1.$2");
	v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
	v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
	v = v.replace(/(\d{4})(\d)/, "$1-$2");
	return v;
};

const cep_mask = (v: string) => {
	v = v.replace(/\D/g, "");
	v = v.replace(/^(\d{5})(\d)/, "$1-$2");
	return v;
};

const celular_mask = (v: string) => {
	v = v.replace(/\D/g, "");
	v = v.replace(/^(\d\d)(\d)/g, "($1) $2");
	v = v.replace(/(\d{5})(\d)/, "$1-$2");

	return v;
};

const integer_mask = (v: string) => {
	v = v.replace(/[^\d-]/g, "");
	v = v.replace(/^(-?)0+(?=\d)/, "$1");
	v = v.replace(/--/g, "-");

	return v;
};
