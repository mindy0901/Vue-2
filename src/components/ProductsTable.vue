<template>
    <el-row>
        <el-col :span="24">
            <el-table :data="productStore.products" stripe height="480" class="table">
                <el-table-column prop="id" label="ID" width="100" align="center" />
                <el-table-column prop="name" label="Name" width="220" />
                <el-table-column prop="price" label="Price" width="100" align="center" />
                <el-table-column prop="type" label="Type" width="100" align="center" />
                <el-table-column prop="adj" label="Adjective" width="200" align="center" />
                <el-table-column prop="mat" label="Material" width="200" align="center" />
                <el-table-column prop="desc" label="Description" width="400" align="center" />

                <el-table-column label="Operations" align="center">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.row)">Edit</el-button>

                        <el-popconfirm
                            title="Confirm to delete this product"
                            confirm-button-text="Ok"
                            cancel-button-text="Cancel"
                            cancel-button-type="Primary"
                            icon="el-icon-info"
                            icon-color="red"
                            @confirm="handleDelete"
                            @cancel="productStore.product = {}"
                        >
                            <el-button
                                size="mini"
                                type="danger"
                                slot="reference"
                                @click="productStore.product = scope.row"
                                >Delete</el-button
                            >
                        </el-popconfirm>
                    </template>
                </el-table-column>
            </el-table></el-col
        >
    </el-row>
</template>

<script>
import { useProductStore } from '@/stores/product';

export default {
    name: 'ProductsTable',
    props: ['handleEdit', 'handleDelete'],
    setup() {
        const productStore = useProductStore();
        return { productStore };
    },
};
</script>

<style lang="scss" scoped>
.table {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    width: 100%;
}
</style>
