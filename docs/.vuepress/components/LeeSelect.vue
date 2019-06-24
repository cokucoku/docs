<template>
    <div class="lee-select">
        <div class="lee-input" :class="{focus:exp}" @click.stop="exp=!exp">
            <input type="text" readonly="readonly" v-model="label" :placeholder="placeholder">
            <div class="jt" :class="[exp?'up':'down']">
                <span></span>
            </div>
        </div>
        <transition name="my"  @enter="enter" @after-enter="afterenter" @leave="leave" @after-leave="afterleave">
            <ul class="lee-options" v-if="exp">
                <slot></slot>
            </ul>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'LeeSelect',
    inheritAttrs: false,
    data() {
        return {
            exp: false
        }
    },
    beforeDestroy() {
        document.removeEventListener('click', function() {
            _this.exp = false
        });
    },
    mounted() {
        var _this = this
        document.addEventListener('click', function() {
            _this.exp = false
        });
    },
    provide() {
        return {
            select: this
        };
    },
    methods:{
        enter(el) {
            var h = el.scrollHeight
            el.style.setProperty('--h', h + 'px')
        },
        afterenter(el) {
            el.removeAttribute('style')
        },
        leave(el) {
            var h = el.scrollHeight
            el.style.setProperty('--h', h + 'px')
        },
        afterleave(el) {
            el.style.setProperty('--h', '')
        }
    }
    ,
    computed: {
        label() {
            var _this = this
            var options = this.$parent.options
            var a = options.filter(function(el) {
                return el.value == _this.value
            });
            if (a.length > 0) {
                return a[0].label
            } else {
                return ''
            }
        }
    },
    props: {
        value: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        }
    }
};
</script>
<style scoped>
.lee-select {
    position: relative;
    width: 240px;
    z-index: 44
}

.lee-select .lee-input {
    height: 40px;
    position: relative;
    cursor: pointer;
}

.lee-select .lee-input input {
    border: solid 1px #ddd;
    border-radius: 4px;
    height: 40px;
    width: 100%;
    padding: 0 30px 0 15px;
    outline: none;
    cursor: pointer;
}

.lee-select .lee-input.focus input {
    border-color: #46bd87;
    transition: all .5s
}

.lee-select .lee-input .jt {
    position: absolute;
    right: 15px;
    transition: all .3s
}

.lee-select .lee-input .jt.down {
    transform: rotate(-45deg);
    top: 15px;
}

.lee-select .lee-input .jt.up {
    transform: rotate(-225deg);
    top: 18px;
}

.lee-select .lee-input .jt span {
    border-left: solid 1px #aaa;
    border-bottom: solid 1px #aaa;
    display: block;
    width: 8px;
    height: 8px
}
.lee-options {
    margin: 0px;
    padding: 6px 0;
    position: absolute;
    width: 100%;
    background: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    margin-top: 8px;
    border-radius: 4px;
    border: solid 1px #dedede;
    transition: all .3s cubic-bezier(0.77, 0, 0.175, 1);
    overflow: hidden;
}

.my-enter-active {
    animation: my-in .3s ease-in-out;
}

.my-leave-active {
    animation: my-out .3s ease-in-out;
}

@keyframes my-in {
    0% {
        height: 0;opacity: 0
    }

    100% {
        height: var(--h);opacity: 1
    }
}

@keyframes my-out {
    0% {
        height: var(--h);opacity: 1
    }

    100% {
        height: 0;opacity: 0
    }
}
</style>