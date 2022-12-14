<template>
    <el-dialog
        title="Tips"
        :visible.sync="productStore.visible"
        width="30%"
        :before-close="handleClose"
    >
        <el-form label-position="left" label-width="100px" :model="productStore.form">
            <el-form-item label="Name">
                <el-input v-model="productStore.form.name"></el-input>
            </el-form-item>
            <el-form-item label="Price">
                <el-input v-model="productStore.form.price"></el-input>
            </el-form-item>
            <el-form-item label="Type">
                <el-input v-model="productStore.form.type"></el-input>
            </el-form-item>
            <el-form-item label="Material">
                <el-input v-model="productStore.form.mat"></el-input>
            </el-form-item>
            <el-form-item label="Adjective">
                <el-input v-model="productStore.form.adj"></el-input>
            </el-form-item>
            <el-form-item label="Description">
                <el-input v-model="productStore.form.desc"></el-input>
            </el-form-item>
        </el-form>

        <span slot="footer" class="dialog-footer">
            <el-button @click="handleClose">Cancel</el-button>
            <el-button @click="handleOk" type="primary">Confirm</el-button>
        </span>
    </el-dialog>
</template>

<script>
import { useProductStore } from '@/stores/product';

export default {
    name: 'ProductDialog',
    props: ['handleClose', 'handleOk'],
    setup() {
        const productStore = useProductStore();
        return { productStore };
    },
};
</script>

<style lang="scss" scoped></style>
