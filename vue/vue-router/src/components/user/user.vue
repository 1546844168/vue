<template>
    <div class="user">

        <!--        <h2>User {{ $route.params.id }}</h2>-->
        <h2>User {{id }}</h2>
        <router-view></router-view>
        <button v-on:click="profile"> 查看个人信息</button>

    </div>
</template>

<script>
    export default {
        name: "user",
        props: ['id'],
        methods: {
            profile() {
                // 编程式的导航， 执行push操作是向history栈中添加一个新的记录。
                this.$router.push({name: 'user', params: {id: 123}}) // -> /user/123
            }
        }
    }
</script>

<style scoped>
    .user {
        color: red;
    }
</style>