require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function')
  })
  it('Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada', () => {
    expect(fetchProducts('computador')).toBe(fetchProducts())
  })
  it('Teste se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint', async () => {
    const actual = await fetchProducts('computador')
    const expected = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    expect(actual).toBe(expected)
  })
});
