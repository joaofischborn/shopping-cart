require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function')
  })
  it('Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada', async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled()
  })
  it('Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint', async () => {
    const expected = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith(expected)
  })
  it('Se não passar nenhum argumento como parâmetro, retorne um erro', async () => {
    const fail = await fetchProducts()
    expect(fail).toEqual(new Error ('You must provide an url'))
  })
  it('Teste se ao chamar a função fetchProducts com o argumento computador, é uma estrutura de dados igual ao objeto computadorSearch', async () => {
   const expected = await fetchProducts('computador');
   expect(expected).toEqual(computadorSearch)
  });
});
