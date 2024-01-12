interface Address {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro?: string;
}

export const getAddress = async (cep: string) => {
  const content = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const { data } = content.json() as Promise<Address>;

  if (data) {
    return data;
  }
};

