<template>
    <div class="lee-cascade-select">
        <div class="lan" v-for="(item,inx) in level">
            <ul>
                <li v-for="(its,txh) in filterdata[inx]" @click="setxh(inx,txh)" :class="{cur:txh==xh[inx]}">
                    {{its.text}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'LeeCascadeSelect',
        inheritAttrs: false,
        data() {
            return {
                level: 0,
                xh: [],
                arr: [],
                filterdata: [
                    // [{
                    //     text: '福建'
                    // },{
                    //     text: '广东'
                    // },],
                    // [{
                    //     text: '福州市'
                    // },{
                    //     text: '厦门市'
                    // },],
                    // [{
                    //     text: 'xx1'
                    // },{
                    //     text: 'xx2'
                    // },]
                ]
            }
        },
        computed: {},
        watch: {
            xh: {
                immediate: true,
                handler(value) {
                    this.$nextTick(function () {
                        this.getdata(this.select)
                    })
                }
            }
        },
        mounted() {
            var level = 0
            var _elment = this.select
            do {
                _elment.map(function (el) {
                    _elment = el.child
                })
                level++
            } while (_elment != undefined);
            this.level = level
            for (var i = 0; i < level; i++) {
                this.xh[i] = 0
            }

        },
        methods: {
            getdata(data) {
                let arr=[];
                let level=0
                for (let i in data) {
                    //arr.push({text:data[i].text})
                    if (data[i].child) {
                        this.getdata(data[i].child) // 灵魂语句
                    }
                    level++
                }
                console.log(level)
            },
            setxh(inx, xh) {
                this.$set(this.xh, inx, xh)
            }
        },
        props: {
            select: {
                type: Array,
                default() {
                    return []
                }
            }
        }
    };
</script>
<style scoped>
    .lee-cascade-select {
        background: #fff;
        display: flex;
        padding: 15px 0;
    }

    .lee-cascade-select li {
        list-style: none;
        padding: 0;
        margin: 0;
        line-height: 40px;
        height: 40px;
        box-sizing: border-box;
        cursor: pointer;
        text-align: center;
        color: #999
    }

    .lee-cascade-select li.cur {
        color: #222
    }

    .lee-cascade-select ul {
        padding: 0;
        margin: 0;
    }

    .lee-cascade-select .lan {
        flex-grow: 1;
    }


    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-to,
    .fade-leave {
        opacity: 1;
    }
</style>