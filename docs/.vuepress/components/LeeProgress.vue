<template>
    <div class="lee-progress" :style="'--h:'+strokeWidth+'px;--bgcolor:'+backgroundColor+';--atcolor:'+activeColor+';--bordius:'+borderRadius+'px;--percent:'+percent+'%'">
        <div class="lee-progress-bar">
            <div class="lee-progress-inner-bar" :class="{animate:animate}" :style="'width:'+percent+'%'">
            </div>
        </div>
        <div class="lee-progress-info" v-if="showInfo">{{percent}}%</div>
    </div>
</template>
<script>
export default {
    name: 'LeeTProgress',
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {


    },
    props: {
        percent: {
            type: Number,
            default: 10
        },
        strokeWidth: {
            type: Number,
            default: 3
        },
        borderRadius: {
            type: Number,
            default: 0
        },
        activeColor: {
            type: String,
            default: '#09BB07'
        },
        backgroundColor: {
            type: String,
            default: '#EBEBEB'
        },
        showInfo: {
            type: Boolean,
            default: false
        },
        animate: {
            type: Boolean,
            default: false
        }
    }
};
</script>
<style>
.lee-progress {
    display: flex;
    align-items: center;
}

.lee-progress-bar {
    flex-grow: 1;
    height: var(--h);
    background-color: var(--bgcolor);
    overflow: hidden;
    border-radius: var(--bordius)
}
.lee-progress-inner-bar {
    height: var(--h);
    background-color: var(--atcolor);
}
.lee-progress-inner-bar.animate{
    animation: jd 1s both
}

.lee-progress-info {
    flex-shrink: 0;
    padding-left: 15px
}

@keyframes  jd{
    0%{
        width: 0
    }
    100%{
        width: var(--percent)
    }
}
</style>