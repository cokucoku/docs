<template>
    <div class="lee-loadimg" id="lee-loadimg">
        <ul>
            <li v-for="item in imglist"><img :data-src="item[imgurl]"></li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'LeeLoadImg',
    inheritAttrs: false,
    data() {
        return {
            imglist: []

        }
    },
    methods: {
        chuli() {
            var _this = this
            fetch(this.url + "?limit="+this.limit+"&page=" + this.page, {
                method: 'get',
            }).then(function(response) {
                return response.json();
            }).then(function(a) {
                _this.imglist = a
                _this.$nextTick(function() {
                    var li = _this.$el.childNodes[0].childNodes;
                    var img = [];
                    var num = li.length;
                    for (var i = 0; i < num; i++) {
                        img[i] = li[i].childNodes
                        //img[i][0].removeAttribute("src")
                        img[i][0].style.opacity = 0
                    }
                    _this.lazyload(img)
                    window.addEventListener('scroll', function() {
                        _this.lazyload(img)
                    });
                })
            })

        },
        lazyload(img) {
            var seeHeight = document.documentElement.clientHeight; //可见区域高度
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度
            for (var i = 0; i < this.imglist.length; i++) {
                //img[i][0].removeAttribute("src")
                if (img[i][0].offsetTop < seeHeight + scrollTop) {
                    //if (img[i][0].getAttribute("src") == null) {
                        img[i][0].src = img[i][0].getAttribute("data-src");
                        img[i][0].style.opacity = 1
                    //}
                }
            }

        }
    },
    mounted() {


    },
    computed: {

    },
    props: {
        url: {
            type: String,
            default: '' //默认default
        },
        imgurl: {
            type: String,
            default: '' //默认default
        },
        page: {
            type: Number,
            default: 1 //默认default
        },
        limit: {
            type: Number,
            default: 10 //默认default
        }

    },
    watch: {
        page: {
            immediate: true,
            handler(value) {
                this.chuli()
            }
        }
    },

};
</script>
<style scoped>
.lee-loadimg li {
    list-style: none;
}

.lee-loadimg li img {
    max-width: 100%;
    transition: all 1s;
    opacity: 0;
}
</style>