<template>
    <div>
        foo
        {{id}}

    </div>

</template>

<script>
    export default {
        name: "foo",
        computed: {
            id: function () {
                return this.$route.params.id
            }
        }
    }
</script>

<style scoped>

</style>