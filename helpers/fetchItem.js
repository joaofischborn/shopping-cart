const fetchItem = async (id) => {
  const response = await fetch(`https://api.mercadolibre.com/items/${id}`);
  try {
  const data = await response.json();
  return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
