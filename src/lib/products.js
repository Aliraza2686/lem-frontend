import api from "../api";

export async function getProducts(category) {
  const { data } = await api.get("/products", {
    params: category ? { category } : undefined,
  });
  return data.products;
}

export async function getProduct(id) {
  const { data } = await api.get(`/products/${id}`);
  return data.product;
}
