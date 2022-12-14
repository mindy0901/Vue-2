<template>
    <div id="home">
        <el-row class="row-padding" justify="end">
            <el-col :span="24" class="col-end">
                <el-button type="primary" @click="handleOpen">Add new Product</el-button></el-col
            >
        </el-row>

        <ProductsTable v-bind="{ handleEdit, handleDelete }" />

        <ProductDialog v-bind="{ handleClose, handleOk }" />
    </div>
</template>

<script>
import ProductsTable from '@/components/ProductsTable';
import ProductDialog from '@/components/ProductDialog.vue';
import { useProductStore } from '@/stores/product';

export default {
    name: 'HomePage',
    components: {
        ProductsTable,
        ProductDialog,
    },
    setup() {
        const productStore = useProductStore();
        return { productStore };
    },
    mounted() {
        this.getProductList();
    },
    methods: {
        handleOpen() {
            this.productStore.visible = true;
        },

        handleEdit(row) {
            this.productStore.product = row;
            this.productStore.form = row;
            this.productStore.isEdit = true;
            this.productStore.visible = true;
        },

        handleClose() {
            this.productStore.visible = false;
            this.productStore.isEdit = false;
            this.productStore.form = {};
            this.productStore.product = {};
        },

        async handleOk() {
            if (this.productStore.isEdit) {
                const result = await this.productStore.updateOneProduct();
                if (result)
                    this.$message({
                        message: 'Product updated.',
                        type: 'success',
                    });

                this.productStore.isEdit = false;
                this.productStore.product = {};
                this.productStore.form = {};
            } else {
                const result = await this.productStore.createNewProduct();
                if (result)
                    this.$message({
                        message: 'New product created.',
                        type: 'success',
                    });
            }
            this.productStore.visible = false;
        },

        async handleDelete() {
            const result = await this.productStore.deleteOneProduct();
            if (result)
                this.$message({
                    message: 'Product deleted',
                    type: 'success',
                });
        },

        getProductList() {
            this.productStore.getListProduct();
        },
    },
};
</script>

<style lang="scss" scoped>
.col-end {
    width: 100%;
    display: flex;
    justify-content: flex-end;
}

.row-padding {
    padding-bottom: 20px;
}
</style>
