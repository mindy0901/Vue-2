<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
    >
        <el-menu-item index="1">Home</el-menu-item>

        <el-submenu index="2">
            <template slot="title">Workspace</template>
            <el-submenu index="2-1">
                <template slot="title">item </template>
                <el-menu-item index="2-1-1">item one</el-menu-item>
                <el-menu-item index="2-1-2">item two</el-menu-item>
                <el-menu-item index="2-1-3">item three</el-menu-item>
            </el-submenu>
            <el-menu-item index="2-2">item two</el-menu-item>
            <el-menu-item index="2-3">item three</el-menu-item>
            <el-submenu index="2-4">
                <template slot="title">item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
            </el-submenu>
        </el-submenu>

        <el-menu-item index="3">Info</el-menu-item>
        <el-menu-item index="4">Market</el-menu-item>
        <el-menu-item index="5">Notifications</el-menu-item>
        <el-menu-item index="6">Info</el-menu-item>
        <el-menu-item index="7">Help</el-menu-item>
    </el-menu>
</template>

<script>
export default {
    name: 'NavMenu',
    data() {
        return {
            activeIndex: '1',
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
    },
};
</script>

<style lang="scss" scoped></style>
