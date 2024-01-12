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
  const data = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
  const address = data.json() as Promise<Address>;

  if (address) {
    return address;
  }
};

getAddress("09572-210");
