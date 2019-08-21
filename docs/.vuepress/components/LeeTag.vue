<template>
    <div class="lee-tags">
        <transition-group name="list" tag='div'>
            <span class="lee-tag" v-for="(item,inx) in tags" :key="item.t" :style="'color:'+cor(item.color)+';background:'+bg(item.color)+';border:solid 1px '+bor(item.color)+';'">{{item.t}}<i v-if="closeable" @click="del(inx)" :style="'color:'+item.color"></i></span>
            <div class="editinput" key="edit" v-if="editable">
                <span key="edits" v-if="!edit" @click="edit=true">+ 新标签</span>
                <input v-focus key="editip" v-else type="text" ref="ipt" name="" v-model="newtag" @blur="addtag">
            </div>
            <lee-alert key="alert" v-if="err" title="标签重复" type="danger" show-icon></lee-alert>
        </transition-group>
        
    </div>
</template>
<script>
export default {
    name: 'LeeTag',
    data() {
        return {
            tags: [],
            newtag: '',
            edit: false,
            err:false
        }
    },
    directives: {
        focus: {
            inserted: function(el) {
                el.focus()
            }
        }
    },
    watch: {
        tag: {
            immediate: true,
            handler(value) {
                this.tags = value
            }
        }
    },
    mounted() {
        this.keyupEnter()
    },
    methods: {
        keyupEnter() {
            var _this = this
            document.onkeydown = function(e) {
                let ipt = _this.$refs.ipt
                if (e.keyCode === 13 && e.target === ipt) {
                    _this.addtag()
                }
            }
        },
        addtag() {
            var _this = this
            this.edit = false
            var newtag=this.newtag.replace(/\s*/g, "");
            if (newtag.length > 0) {
                var fi = this.tags.filter(function(el) {
                    return el.t.indexOf(newtag) > -1;
                });
                if (fi.length < 1) {
                    this.tags.push({ t: newtag })
                }else{
                    this.err=true
                    setTimeout(function () {
                        _this.err=false
                    },2000)
                }

            }
            this.newtag = ''

        },
        del(xh) {
            this.tags.splice(xh, 1)
        },
        tonum(str) {
            switch (str) {
                case 'a':
                case 'A':
                    str = 10
                    break;
                case 'b':
                case 'B':
                    str = 11
                    break;
                case 'c':
                case 'C':
                    str = 12
                    break;
                case 'd':
                case 'D':
                    str = 13
                    break;
                case 'e':
                case 'E':
                    str = 14
                    break;
                case 'f':
                case 'F':
                    str = 15
                    break;
            }
            return str
        },
        torgb(color) {
            var color = color.split('#')[1]
            var r = color.slice(0, 2)
            var r1 = r.slice(0, 1)
            var r2 = r.slice(1, 2)
            var g = color.slice(2, 4)
            var g1 = g.slice(0, 1)
            var g2 = g.slice(1, 2)
            var b = color.slice(4, 6)
            var b1 = b.slice(0, 1)
            var b2 = b.slice(1, 2)
            var R = Number(this.tonum(r1) * 16) + Number(this.tonum(r2))
            var G = Number(this.tonum(g1) * 16) + Number(this.tonum(g2))
            var B = Number(this.tonum(b1) * 16) + Number(this.tonum(b2))
            return { R: R, G: G, B: B }
        },
        bg(color) {
            if (color == undefined) {
                color = "#46bd87"
            }
            var R = this.torgb(color).R
            var G = this.torgb(color).G
            var B = this.torgb(color).B
            return 'rgba(' + R + ',' + G + ',' + B + ',.1)'


        },
        bor(color) {
            if (color == undefined) {
                color = "#46bd87"
            }
            var R = this.torgb(color).R
            var G = this.torgb(color).G
            var B = this.torgb(color).B
            return 'rgba(' + R + ',' + G + ',' + B + ',.2)'


        },
        cor(color) {
            if (color == undefined) {
                color = "#46bd87"
            }
            var R = this.torgb(color).R
            var G = this.torgb(color).G
            var B = this.torgb(color).B
            return 'rgb(' + R + ',' + G + ',' + B + ')'


        }

    },
    props: {
        tag: {
            type: Array,
            default () {
                return []
            }
        },
        closeable: {
            type: Boolean,
            default: false //默认default
        },
        editable: {
            type: Boolean,
            default: false //默认default
        }
    }
};
</script>
<style scoped>
.lee-tags div {
    display: flex;
    flex-wrap: wrap;
}

.lee-tags .lee-tag {
    box-sizing: border-box;
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    display: flex;
    padding: 0 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    white-space: nowrap;
    border-radius: 4px;
    align-items: center;
    transition: all .4s;
}

.lee-tags .lee-tag i {
    margin-right: -8px;
    cursor: pointer;
    width: 16px;
    height: 16px;
    line-height: 16px;
    position: relative;
    transform: rotate(45deg);
}

.lee-tags .lee-tag i:hover {
    border-radius: 100%;
    background: currentColor;
}

.lee-tags .lee-tag i:before {
    content: "";
    width: 1px;
    height: 60%;
    position: absolute;
    background: currentColor;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

.lee-tags .lee-tag i:after {
    content: "";
    height: 1px;
    width: 60%;
    position: absolute;
    background: currentColor;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.lee-tags .lee-tag i:hover:before {
    background: #fff
}

.lee-tags .lee-tag i:hover:after {
    background: #fff
}

.list-leave-to,
.list-enter {
    opacity: 0;
    /*transform: scaleX(0) translateX(-12px);*/
    transform: translateY(32px)
}

.lee-tags .editinput {
    height: 32px;
    margin-left: 10px;
}

.lee-tags .editinput span {
    font-size: 12px;
    line-height: 30px;
    padding: 0 16px;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    box-sizing: border-box;
    transition: all .5s
}

.lee-tags .editinput span:hover {
    color: rgb(103, 194, 58);
    background: rgba(103, 194, 58, 0.1);
    border: 1px solid rgba(103, 194, 58, 0.4);
}

.lee-tags .editinput input {
    width: 81px;
    border: 1px solid rgba(103, 194, 58, 1);
    border-radius: 4px;
    outline: none;
    box-sizing: border-box;
    padding: 0 10px;
}
.lee-tags .lee-alert{margin:0;height: 32px;margin-left: 15px;transition: all .4s;}
</style>