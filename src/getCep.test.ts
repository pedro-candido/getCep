import { getAddress } from "./getCep";

const cep = "01001000";

describe("getAddress", () => {
  it("should return when cep is found", async () => {
    const response = await getAddress(cep);

    expect(response).toEqual({
      bairro: "Sé",
      ddd: "11",
      siafi: "7107",
      cep: "01001-000",
      complemento: "lado ímpar",
      gia: "1004",
      ibge: "3550308",
      localidade: "São Paulo",
      logradouro: "Praça da Sé",
      uf: "SP",
    });
  });
  it("when cep is not found", async () => {
    const response = await getAddress("99999999");

    expect(response).toEqual({ erro: true });
  });
});
