<template>
    <div id="app">
        <el-container direction="vertical">
            <el-header style="padding: 0"> <NavMenu /> </el-header>
            <el-main>
                <HomePage />
            </el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
import HomePage from './pages/HomePage.vue';
import NavMenu from './components/NavMenu.vue';

export default {
    name: 'App',
    components: {
        NavMenu,
        HomePage,
    },
};
</script>
