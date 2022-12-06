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
            <el-col :span="8"  v-for="(item,index) in playerList" class="elrow-warp">
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
    props:{"showhidens1":{type:Boolean,default:false}},// 是否显示作品  true显示 false不显示
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
            index:0,//幻灯片索引 默认第一张
            showhiden:this.showhidens1, // 是否显示作品  true显示 false不显示
            playerList:[
                {src:'https://myblogvideo2022.pek3b.qingstor.com/video/00.mp4',title:'抵制暴力'},
                {src:'https://myblogvideo2022.pek3b.qingstor.com/video/3.mp4',title:'回忆家乡'},
                {src:'https://myblogvideo2022.pek3b.qingstor.com/video/6.mp4',title:'咖啡店探店'},
                {src:'https://myblogvideo2022.pek3b.qingstor.com/video/4.mp4',title:'传统广告'}
            ],
                
            
            
            // playList:[
            // {
            //    playerOptions: {
            //         // videojs options
            //         muted: true,
            //         language: 'zh-CN',
            //         playbackRates: [0.7, 1.0, 1.5, 2.0],
            //         aspectRatio: "16:9",
            //         sources: [
            //         {
            //             type: "video/mp4",
            //             src: 'https://myblogvideo2022.pek3b.qingstor.com/video/3.mp4'
            //             // src:'https://pan.baidu.com/s/1WhvoSrVj1llohruI5oY5gA?pwd=6666'
            //         }
            //         ],
            //         poster: "/qinjingblog/src/assets/img/2.jpg", //封面地址
            //     },
            // },
            // {
            //    playerOptions: {
            //         // videojs options
            //         muted: true,
            //         language: 'zh-CN',
            //         playbackRates: [0.7, 1.0, 1.5, 2.0],
            //         aspectRatio: "16:9",
            //         sources: [
            //         {
            //             type: "video/mp4",
            //             // src: require("../../assets/video/6.mp4")
            //             src:'https://myblogvideo2022.pek3b.qingstor.com/video/6.mp4'
            //         }
            //         ],
            //         poster: "/qinjingblog/src/assets/img/3.jpg", //封面地址
            //     },
            // },
            // {
            //    playerOptions: {
            //         // videojs options
            //         muted: true,
            //         language: 'zh-CN',
            //         playbackRates: [0.7, 1.0, 1.5, 2.0],
            //         aspectRatio: "16:9",
            //         sources: [
            //         {
            //             type: "video/mp4",
            //             // src: require("../../assets/video/4.mp4")
            //             src:'https://myblogvideo2022.pek3b.qingstor.com/video/4.mp4'
            //         }
            //         ],
            //         poster: "/qinjingblog/src/assets/img/4.jpg", //封面地址
            //     },
            // },
            // {
            //    playerOptions: {
            //         // videojs options
            //         muted: true,
            //         language: 'zh-CN',
            //         playbackRates: [0.7, 1.0, 1.5, 2.0],
            //         aspectRatio: "16:9",
            //         sources: [
            //         {
            //             type: "video/mp4",
            //             // src: require("../../assets/video/5.mp4")
            //         }
            //         ],
            //         poster: "/qinjingblog/src/assets/img/2.jpg", //封面地址
            //     },
            // }
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
            this.$emit('getShowStatus1',this.showhiden)
        },
        changeCarousel(){
            //  索引
        let currentindex = this.$refs.carousel.activeIndex || 0
        let tempindex =0
 
         if( (currentindex!=tempindex) && (currentindex-1 > 0 || currentindex-1 == 0)) {
                tempindex = currentindex-1
         } else {
            tempindex = currentindex + 1
         }
       
        
       
        // else {
        //     tempindex +=1
        // }
        //  console.log(this.$refs);
        // console.log(currentindex)
        // if(tempindex < currentindex) {
        //     tempindex = currentindex
        //     if(tempindex!=0) {
        //         tempindex -=1
        //     }
        // }
    //    console.log(tempindex);
        this.$refs.VuevideoPlayer[tempindex].player.pause()
        },
        
    }
}
</script>
<style scoped lang="scss">
.el-col-8 {
    width: 30%;
}
.elrow-text{
    display: block;
    margin: 10px 0;
}
.elrow-warp {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}
.video-box{
    width:360px;
    height:200px;
    // margin:0 auto;
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
.elrow-warp:nth-child(3n-1) {
    margin: 0 20px;
}
    
</style>