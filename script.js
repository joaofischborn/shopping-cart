// / Start project
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

const createProductItemElement = ({ sku, name, image }) => {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
};

const getSkuFromProductItem = (item) => item.querySelector('span.item__sku').innerText;

const cartItemClickListener = (event) => event.target.remove();

const createCartItemElement = ({ sku, name, salePrice }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addProductsSection = async () => {
  const productElement = await fetchProducts();
  
  productElement.forEach(({ id, title, thumbnail }) => {
    const setItem = createProductItemElement({
      sku: id,
      name: title,
      image: thumbnail,
    });
    const sectionItems = document.querySelector('.items');
    sectionItems.appendChild(setItem);
  });
};

const addProducts = () => {
  const cartItems = document.querySelector('.cart__items');
  const addButtons = document.querySelectorAll('.item__add');
  addButtons.forEach((button) => button.addEventListener('click', async () => {
    const product = button.parentNode;
    const productId = product.firstElementChild.innerText;
    const productInfo = await fetchItem(productId);
    const { id, title, price } = productInfo;
    cartItems.appendChild(createCartItemElement({ sku: id, name: title, salePrice: price }));
  })); 
};

window.onload = async () => {
  await addProductsSection();
  addProducts();
};
