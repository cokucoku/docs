<template>
    <ul class="lee-menu-tree">
        <lee-menu-item  v-for="(item, index) in menu" :menu="item" :key="index"></lee-menu-item>
    </ul>
</template>
<script>
export default {
    name: 'LeeMenuTree',
    inheritAttrs: false,
    data() {
        return {
        }
    },
    watch: {
    },
    mounted() {

    },
    methods: {
    },
    computed: {

    },
    props: {
        menu: {
            type: Array,
            default () {
                return []
            }
        }
    }
};
</script>
<style scoped>
.lee-menu-tree{background: #fff}
ul,li{margin:0;padding: 0px;list-style: none;}
</style>