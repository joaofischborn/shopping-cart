const fetchProducts = async (id) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
