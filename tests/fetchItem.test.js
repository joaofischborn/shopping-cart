require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('teste se fetchItem é uma função', () =>{
    expect(typeof fetchItem).toBe('function')
  })
  it('teste se fetch é chamado ao executar fetchItem com parametro MLB1615760527', async() =>{
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled()
  })
  it('teste se ao chamar a função fetchProducts com o argumento MLB1615760527 utiliza o endpoint correto', async() =>{
    const url = "https://api.mercadolibre.com/items/MLB1615760527";
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledWith(url);
  })
  it('teste se o retorno de fetchItem com parametro MLB1615760527 é igual o objeto esperado', async() =>{
    const returnObj = await fetchItem('MLB1615760527')
    expect(returnObj).toEqual(item);
  })
  it('teste se ao chamar fetchItem sem argumento retorna o erro esperado', async() =>{
    const fail = await fetchItem()
    expect(fail).toEqual('You must provide an url')
  })
});
