import axios from "axios";

export const getAddress = async (cep: string) => {
  const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

  if (data) {
    return data;
  }
};
