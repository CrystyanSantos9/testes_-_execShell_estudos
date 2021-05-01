/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable quotes */
// importo o módulo de juros
const juros = require("./juros");

describe("Testando o módulo de juros e suas funções", () => {
  test("testando jurosSimples", () => {
    // declarando as variáveis necessárias para o cálculo
    const C = 100;
    const i = 0.01;
    const t = 1;
    // valor esperado após o cálculo
    const valorEsperado = 1;
    // uso da funcao
    const jurosCalculados = juros.jurosSimples(C, i, t);
    // eslint-disable-next-line no-undef
    expect(jurosCalculados).toBe(valorEsperado);
  });
  test("testando montanteJurosSimples", () => {
    const C = 100;
    const i = 0.01;
    const t = 1;

    const jurosSimplesEsperados = 101;

    const jurosSimples = jest.fn();
    jurosSimples.mockImplementation(() => jurosSimplesEsperados); // recebe o valor fixo 101

    const montanteJurosSimples = juros.pure.montanteJurosSimples({
      jurosSimples,
    });

    const montanteSimplesCalculado = montanteJurosSimples(C, i, t); // = 201

    const valorMontanteSimplesEsperado = 201;
    expect(jurosSimples.mock.calls[0]).toEqual([100, 0.01, 1]);
    expect(montanteSimplesCalculado).toBe(valorMontanteSimplesEsperado);
  });
  test("testando função de juros compostos", () => {
    // declarando variáveis
    const C = 100;
    const i = 0.01;
    const t = 1;

    // valor esperado após o cálculo
    const jurosCompostosEsperados = 101;

    // inserindo o retorno da nossa funcao em variável
    const montanteJurosCompostos = juros.montanteJurosCompostos(C, i, t); // = 101
    // comparando o retorno da nossa funcao
    expect(montanteJurosCompostos).toBe(jurosCompostosEsperados);
  });
  test(" JurosCalculados - Capital = valorDeJurosCalculado", () => {
    // declarando variáveis
    const C = 100;
    const i = 0.01;
    const t = 1;

    // valor esperado após o cálculo
    const jurosCompostosEsperados = 101;
    const montanteJurosCompostos = jest.fn();
    montanteJurosCompostos.mockImplementation(() => jurosCompostosEsperados);

    // console.log(montanteJurosCompostos.mock);

    const jurosCompostos = juros.pure.jurosCompostos({
      montanteJurosCompostos,
    });

    const valorJurosCompostos = 1;
    const valorJurosCompostosCalculados = jurosCompostos(C, i, t);

    expect(montanteJurosCompostos.mock.calls[0]).toEqual([100, 0.01, 1]);
    expect(valorJurosCompostosCalculados).toBe(valorJurosCompostos);

    // console.log(valorJurosCompostos);
    // console.log(montanteJurosCompostos.mock);
  });
});
