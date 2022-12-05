<template>
    <div class="video-warp">
        <div class="video-warp-icon" >
            <el-tooltip  class="item" effect="dark" content="返回上一步" placement="top-start">
                <el-button @click="setStatus"><i class="el-icon-back"></i></el-button>
            </el-tooltip>
        </div>
       
        <el-carousel 
            indicator-position="none" 
            :autoplay="false" 
            @change="changeCarousel()"
            ref="carousel"
            >
            <el-carousel-item
                v-for="(item,index) in playList" 
                :key="index"
            >
            <video src="https://jingjingsunny.github.io/qinjingblog/src/assets/video/3.mp4"><video>
                <!-- <video-player
                    :options="item.playerOptions" 
                    ref="VuevideoPlayer"
                ></video-player> -->
            </el-carousel-item>
        </el-carousel>
        
    </div>
    
</template>
<script>

export default {
    name:'Contents',
    props:{"showhidens1":{type:Boolean,default:false}},// 是否显示作品  true显示 false不显示
    created(){
        // 请求页面所有数据
        // this.testaxios();
    },
    data(){
        return {
            index:0,//幻灯片索引 默认第一张
            showhiden:this.showhidens1, // 是否显示作品  true显示 false不显示
            playList:[
            {
               playerOptions: {
                    // videojs options
                    muted: true,
                    language: 'zh-CN',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    aspectRatio: "16:9",
                    sources: [
                    {
                        type: "video/mp4",
                        src: 'https://jingjingsunny.github.io/qinjingblog/src/assets/video/3.mp4'
                        // src:'https://pan.baidu.com/s/1WhvoSrVj1llohruI5oY5gA?pwd=6666'
                    }
                    ],
                    poster: "/qinjingblog/src/assets/img/2.jpg", //封面地址
                },
            },
            {
               playerOptions: {
                    // videojs options
                    muted: true,
                    language: 'zh-CN',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    aspectRatio: "16:9",
                    sources: [
                    {
                        type: "video/mp4",
                        // src: require("../../assets/video/6.mp4")
                        src:'/qinjingblog/src/assets/video/6.mp4'
                    }
                    ],
                    poster: "/qinjingblog/src/assets/img/2.jpg", //封面地址
                },
            },
            {
               playerOptions: {
                    // videojs options
                    muted: true,
                    language: 'zh-CN',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    aspectRatio: "16:9",
                    sources: [
                    {
                        type: "video/mp4",
                        // src: require("../../assets/video/4.mp4")
                        src:'/qinjingblog/src/assets/video/4.mp4'
                    }
                    ],
                    poster: "/qinjingblog/src/assets/img/2.jpg", //封面地址
                },
            },
            {
               playerOptions: {
                    // videojs options
                    muted: true,
                    language: 'zh-CN',
                    playbackRates: [0.7, 1.0, 1.5, 2.0],
                    aspectRatio: "16:9",
                    sources: [
                    {
                        type: "video/mp4",
                        // src: require("../../assets/video/5.mp4")
                    }
                    ],
                    poster: "/qinjingblog/src/assets/img/2.jpg", //封面地址
                },
            }
            ],
            // 文章列表
            article: [],
            // 作品列表
            workshow: [],
        }
    },
    methods: {
        testaxios(){
            
        },
        setStatus(){
            //更改
            this.showhiden = false;
            this.$emit('getShowStatus1',this.showhiden)
        },
        changeCarousel(){
            //  索引
        let currentindex = this.$refs.carousel.activeIndex
        this.$refs.VuevideoPlayer[currentindex].player.pause()
        },
    }
}
</script>
<style scoped lang="scss">
.clearfloat::after {
    content: "";
    display: block;
    clear: both;
    overflow: hidden;
}
.el-icon-back {
    font-size: 20px;
}
.img {
    float: left;
    width: 100px;
    height: 100px;
}
.img img {
    width: 100%;
    height: 100%;
}
.list-right {
    float: left;
}

.zan img{
   height: 12px; 
}
.video-warp {
    width: 500px;
    
}
.video-warp-icon {
    text-align: right;
}
.video-warp-icon i,.video-warp-icon span {
    vertical-align: middle;
}
.el-button {
    border: none;
    padding: 0;
}
.el-button:hover{
    background-color: none;
}
    
</style>