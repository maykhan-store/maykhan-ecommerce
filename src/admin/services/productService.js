const STORAGE_KEY = "maykhan_products";

export function getProducts() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function saveProducts(products) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

export function addProduct(product) {
  const products = getProducts();

  products.push({
    id: Date.now(),
    ...product,
  });

  saveProducts(products);
}

export function deleteProduct(id) {
  const products = getProducts().filter(
    (item) => item.id !== id
  );

  saveProducts(products);
}

export function getProduct(id) {
  return getProducts().find(
    (item) => item.id === Number(id)
  );
}

export function updateProduct(updatedProduct) {
  const products = getProducts().map((item) =>
    item.id === updatedProduct.id
      ? updatedProduct
      : item
  );

  saveProducts(products);
}