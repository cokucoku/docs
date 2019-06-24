<template>
    <li @click="sel(value)" :class="{selected:value==select.value}">{{label}}</li>
</template>
<script>
export default {
    name: 'LeeOption',
    inheritAttrs: false,
    data() {
        return {}
    },
    inject: ['select'],
    methods: {
        sel(value){
            this.select.exp=false
            this.select.$emit('input',value)
        }
    },
    props: {
        value: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: ''
        }
    }
};
</script>
<style scoped>


.lee-options li {
    list-style: none;
    padding: 0 20px;
    height: 34px;
    line-height: 34px;
    font-size: 14px;
    cursor: pointer;
}

.lee-options li:hover {
    background: #eee;
    color: #46bd87
}

.lee-options li.selected {
    color: #46bd87
}
</style>