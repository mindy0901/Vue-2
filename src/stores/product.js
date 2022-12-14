import { createProduct, deleteProduct, getProducts, updateProduct } from '@/api';
import { defineStore } from 'pinia';

const INITTIAL_STATE = {
    products: [],
    product: {},
    form: {
        name: '',
    },
    isEdit: false,
    visible: false,
};

export const useProductStore = defineStore('product', {
    state: () => {
        return INITTIAL_STATE;
    },

    actions: {
        openEdit(state) {
            this.isEdit = state;
        },

        async getListProduct() {
            try {
                const data = await getProducts();
                this.products = data.data;
            } catch (error) {
                console.log(error);
            }
        },

        async createNewProduct() {
            try {
                const newData = await createProduct(this.form);
                this.products.push(newData.data);
                return true;
            } catch (error) {
                return false;
            }
        },

        async updateOneProduct() {
            try {
                const updatedProduct = await updateProduct(this.form.id, this.form);
                this.products.map((product) =>
                    product.id === updatedProduct.data.id ? updatedProduct.data : product
                );
                return true;
            } catch (error) {
                return false;
            }
        },

        async deleteOneProduct() {
            try {
                await deleteProduct(this.product?.id);
                this.products = this.products.filter((product) => product.id !== this.product?.id);
                this.product = {};
                return true;
            } catch (error) {
                return false;
            }
        },
    },
});
