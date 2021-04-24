<template>
  <div class="lee-swiper-delete">
    <ul>
      <li v-for="(item,xh) in config" :key="xh" @mousedown.prevent="mousedown()" @mousemove.prevent="mousemove()"
          @mouseup.stop="mouseup()" @touchstart="touchstart" @touchmove="touchmove"
          @touchend="touchend">
        <div class="li">
          <div class="img"><i v-if="!item.read"></i><img :src="item.download_url"></div>
          <div class="text">{{item.author}}</div>
        </div>
        <div class="btns">
          <div class="btn btn1" @click="dot(item,0)" v-if="item.read"><span>设为未读</span></div>
          <div class="btn btn1" @click="dot(item,1)" v-else><span>设为已读</span></div>
          <div class="btn btn2" @click="del(xh)">删除</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    name: 'LeeSwiperDelete',
    inheritAttrs: false,
    data() {
        return {
            target: null,
            oldx: 0,
            isdown: false,
            movex: 0,//移动的距离
            posx: 0//保存释放后的位置
        }
    },
    mounted() {
        document.addEventListener('mouseup', () => {
            this.posx += this.movex//把mousemove的值传给他
            this.goto('pc',this.posx)

        })
        this.config.forEach((el) => {
            this.$set(el, 'read', true)
        })

    },
    props: {
        config: {
            type: Array,
            default() {
                return []
            }
        }
    },
    methods: {
        goto(which,dic) {
            let num=which==='pc'?-150:-120
            this.isdown = false
            //this.movex = 0
            if (dic <= 0) {
                //左滑动
                if (dic <= -50) {
                    this.posx = num
                    this.target.setAttribute('op', 1)
                } else {
                    this.posx = 0
                    this.reset(this.target, 0)
                }
            } else {
                //右滑动，要考虑我滑动在别的地方滑动
                let sw = document.querySelector('.lee-swiper-delete')
                let the = sw.querySelectorAll('li')
                let aa = Array.from(the).filter((el) => {
                    return el.getAttribute('op') == 1
                })

                if (dic >= 50) {
                    this.posx = 0
                    this.reset(this.target, 0)
                } else {
                    if (this.target === aa[0]) {//滑动在同个地方
                        this.posx = num
                        this.target.setAttribute('op', 1)
                    } else {
                        return
                    }
                }
            }
            this.target.style.cssText = "transition:all .5s;transform:translateX(" + (this.posx) + "px)"
            this.target.querySelector('.btns').style.cssText = "transition:all .5s;width:" + -1 * (this.posx) + "px"
            this.target.querySelector('.btn2').style.cssText = "transition:all .5s;left:" + -1 * (this.posx) * 0.5 + "px"


        },
        reset(target, flag) {
            this.posx = 0
            this.movex = 0
            target.removeAttribute('op')
            if (flag === 1) {//删除时
                target.style.cssText = "transition:all 0s;transform:translateX(0px)"
                target.querySelector('.btns').style.cssText = "transition:all 0s;width:0px"
                target.querySelector('.btn2').style.cssText = "transition:all 0s;left:0px"
            } else {
                target.style.cssText = "transition:all .5s;transform:translateX(0px)"
                target.querySelector('.btns').style.cssText = "transition:all .5s;width:0px"
                target.querySelector('.btn2').style.cssText = "transition:all .5s;left:0px"
            }
            setTimeout(() => {
                target.removeAttribute('style')
                target.querySelector('.btns').removeAttribute('style')
                target.querySelector('.btn2').removeAttribute('style')

            }, 500)

        },
        del(xh) {
            this.config.splice(xh, 1)
            this.reset(this.target, 1)
        },
        dot(item, flag) {
            if (flag == 0) {
                this.$set(item, 'read', false)
            } else if (flag == 1) {
                this.$set(item, 'read', true)
            }
            this.reset(this.target, 0)
        },
        mousedown() {
            this.target = event.currentTarget
            let sw = document.querySelector('.lee-swiper-delete')
            let the = sw.querySelectorAll('li')
            let aa = Array.from(the).filter((el) => {
                return el.getAttribute('op') == 1
            })
            if (aa.length > 0 && this.target != aa[0]) {//如果有张开过的，先重置，但是target要不一样
                this.reset(aa[0], 0)
            }

            this.oldx = event.pageX
            this.isdown = true
        },
        mousemove() {
            if (this.isdown) {
                this.movex = event.pageX - this.oldx
                if (this.movex + this.posx >= 0) {
                    return
                }
                if (this.movex + this.posx <= -150) {
                    this.posx = -150
                    this.movex = 0
                }
                this.target.style.cssText = "transition:all 0s;transform:translateX(" + (this.movex + this.posx) + "px)"
                this.target.querySelector('.btns').style.cssText = "transition:all 0s;width:" + -1 * (this.movex + this.posx) + "px"
                this.target.querySelector('.btn2').style.cssText = "transition:all 0s;left:" + -1 * (this.movex + this.posx) * 0.5 + "px"

            }
        },
        mouseup() {
            this.posx += event.pageX - this.oldx
            this.goto('pc',event.pageX - this.oldx)
        },
        touchstart() {
            this.target = event.currentTarget
            let sw = document.querySelector('.lee-swiper-delete')
            let the = sw.querySelectorAll('li')
            let aa = Array.from(the).filter((el) => {
                return el.getAttribute('op') == 1
            })
            if (aa.length > 0 && this.target != aa[0]) {//如果有张开过的，先重置，但是target要不一样
                this.reset(aa[0], 0)
            }

            this.oldx = event.targetTouches[0].pageX
            this.isdown = true
        },
        touchmove() {
            if (this.isdown) {
                this.movex = event.targetTouches[0].pageX - this.oldx
                if (this.movex + this.posx >= 0) {
                    return
                }
                if (this.movex + this.posx <= -120) {
                    this.posx = -120
                    this.movex = 0
                }
                this.target.style.cssText = "transition:all 0s;transform:translateX(" + (this.movex + this.posx) + "px)"
                this.target.querySelector('.btns').style.cssText = "transition:all 0s;width:" + -1 * (this.movex + this.posx) + "px"
                this.target.querySelector('.btn2').style.cssText = "transition:all 0s;left:" + -1 * (this.movex + this.posx) * 0.5 + "px"

            }
        },
        touchend() {
            this.posx += event.changedTouches[0].pageX - this.oldx
            this.goto('mobile',event.changedTouches[0].pageX - this.oldx)

        }
    }
};
</script>
<style scoped>
* {
  margin: 0px;
  padding: 0;
  list-style: none;
  box-sizing: border-box
}

.lee-swiper-delete ul {
  background: #fff;
  overflow: hidden;
}

.lee-swiper-delete ul li {
  border-bottom: solid 1px #ededed;
  white-space: nowrap;
  display: flex;
}

.lee-swiper-delete ul li .li {
  padding: 8px;
  display: flex;
  width: 100%;
  flex-shrink: 0;
  background: #fff;
  position: relative;
  z-index: 2;
}

.lee-swiper-delete ul li .img {
  width: 36px;
  height: 36px;
  position: relative;
}

.lee-swiper-delete ul li .img i {
  border-radius: 100%;
  width: 10px;
  height: 10px;
  background: red;
  position: absolute;
  right: -6px;
  top: -6px;
}

.lee-swiper-delete ul li .img img {
  width: 100%;
  height: 100%;
  object-fit: cover
}

.lee-swiper-delete ul li .text {
  padding-left: 15px;
  width: calc(100% - 50px);
}

.lee-swiper-delete ul li .btns {
  font-size: 14px;
  position: relative;
  width: 0px;
  flex-shrink: 0;
  z-index: 1;
  overflow: hidden;
}

.lee-swiper-delete ul li .btns .btn {
  width: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #fff;
  position: absolute;
}

@media (max-width: 768px){
  .lee-swiper-delete ul li .btns .btn {
    width: 60px;
    font-size: 12px;
  }
}

.lee-swiper-delete ul li .btns .btn1 {
  background: #fa0;
  z-index: 1;
  left: 0;
}

.lee-swiper-delete ul li .btns .btn2 {
  z-index: 2;
  background: #f00;
  right: 0;
}

</style>
