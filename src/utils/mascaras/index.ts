export function mascara(tipo: string, dados: string) {
	if (dados) {
		if (tipo === "cnpj") {
			return cnpj_mask(dados);
		}
		if (tipo === "cpf") {
			return cpf_mask(dados);
		}
		if (tipo === "cep") {
			return cep_mask(dados);
		}
		if (tipo === "celular") {
			return celular_mask(dados);
		}
	}
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
