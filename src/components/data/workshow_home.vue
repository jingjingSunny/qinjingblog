<template>
    <div class="video-warp">
        <div class="video-warp-icon" >
            <el-tooltip  class="item" effect="dark" content="返回上一步" placement="top-start" >
                <el-button @click="setStatus"><i class="el-icon-back"></i></el-button>
            </el-tooltip>
        </div>
       <!-- <el-carousel 
            indicator-position="none" 
            :autoplay="false" 
            @change="changeCarousel()"
            ref="carousel"
            :loop="false"
            >
            <el-carousel-item
                v-for="(item,index) in playList" 
                :key="index"
            >
            
                <video-player
                    :options="item.playerOptions" 
                    ref="VuevideoPlayer"
                ></video-player>
            </el-carousel-item>
        </el-carousel> -->
        <div style="width:100%" >
        <el-row >
            <el-col :span="12"  v-for="(item,index) in playerList" class="elrow-warp">
                <video 
                    :controls="controls"
                    class="video-box"
                    :src="item.src">
                </video>
                <span class="elrow-text">{{item.title}}</span>
            </el-col>
        </el-row>

        </div>
        
    </div>
    
</template>
<script>
export default {
    name:'Contents',
    props:{"showhidens":{type:Boolean,default:false}},// 是否显示作品  true显示 false不显示
    created(){
        // 请求页面所有数据
        // this.testaxios();
    },
    data(){
        return {
            controls: {
            type: Boolean,
            required: false,
            default: true
            },
            showhiden:this.showhidens, // 是否显示作品  true显示 false不显示
            playerList:[
                {
                     src:'https://myblogvideo2022.pek3b.qingstor.com/video/2.mp4',
                     title:'回顾历史 展望未来'
                },
                {
                    src:'https://myblogvideo2022.pek3b.qingstor.com/video/7.mp4',
                    title:'采蘑菇'
                }
            ],
            // playList:[
            // {
            //     playerOptions: {
            //         // videojs options
            //         muted: true,
            //         language: 'zh-CN',
            //         playbackRates: [0.7, 1.0, 1.5, 2.0],
            //         aspectRatio: "16:9",
            //         sources: [
            //         {
            //             type: "video/mp4",
            //             // src: require("../../assets/video/2.mp4")
            //             src:'https://myblogvideo2022.pek3b.qingstor.com/video/2.mp4'
            //         }
            //         ],
            //         poster: "/qinjingblog/src/assets/img/2.jpg", //封面地址
            //     },
            // },
            // ],
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
            this.$emit('getShowStatus',this.showhiden)
        }
    }
}
</script>
<style scoped lang="scss">
.elrow-text{
    display: block;
    margin: 10px 0;
}
.elrow-warp {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
}
.video-box{
    width:360px;
    height:200px
}
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
// .video-warp {
//     width: 500px;
    
// }
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