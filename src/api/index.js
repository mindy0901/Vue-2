import axios from 'axios';

const baseUrl = axios.create({
    baseURL: 'https://6347e538db76843976b521a5.mockapi.io/api',
});

export const createProduct = (data) => baseUrl.post('/products', data);

export const getProducts = () => baseUrl.get('/products');

export const getProduct = (id) => baseUrl.get(`/products/${id}`);

export const updateProduct = (id, data) => baseUrl.put(`/products/${id}`, data);

export const deleteProduct = (id) => baseUrl.delete(`/products/${id}`);
