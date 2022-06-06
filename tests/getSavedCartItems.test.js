const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Se ao executar getSavedCartItems o metodo localStorage.getItem é chamado', () =>{
    getSavedCartItems()
     expect(localStorage.getItem).toHaveBeenCalled()
   })
   it('Se ao executar getSavedCartItems o metodo localStorage.getItem é chamado com o parametro cartItems', () =>{
    getSavedCartItems()
     expect(localStorage.getItem).toHaveBeenCalledWith('cartItems')
   })
});
