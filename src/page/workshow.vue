<template>
    <div>
        <!-- 信息流作品列表 showhiden1-->
        <div v-if="showhiden1" class="leftw ">
            <showList1 :showhidens1="showhiden1" @getShowStatus1="getStatus1"></showList1>
        </div>

         <!-- 二维作品列表 父传子-->
        <div v-if="showhiden" class="leftw ">
            <showList :showhidens="showhiden" @getShowStatus="getStatus"></showList>
        </div>

        <!-- 三维作品列表 showhiden3 -->

        <!-- 首页作品列表 -->
        <div  v-if="!showhiden && !showhiden1" class=" rightW">
            <!-- 信息流 -->
            <div class="mess-warp" @click="showTime(1)">
                <div class="text"></div><img  class="hiden" src="@/assets/img/workShow/信息流.png"/>
                <img class="bg" src="@/assets/img/workShow/6.jpeg"/>
            </div>
            <!-- <div>mg动画</div> -->
            <div class="mess-warp" @click="showTime(3)">
                <div class="text"></div><img class="hiden" src="@/assets/img/workShow/三维.png"/>
                <img class="bg" src="@/assets/img/workShow/28.jpeg"/></div>
            <div class="mess-warp" @click="showTime(2)"><div class="text"></div><img  class="hiden" src="@/assets/img/workShow/二维.png"/>
            <img class="bg" src="@/assets/img/workShow/27.jpeg"/></div>
            <!-- <div>其他</div> -->
        </div>
    </div>
</template>
<script>
import showList1 from '../components/data/xinxiliu.vue'
import showList from '../components/data/workshow_home.vue'
export default {
    name: 'Articel',
    components: {showList1,showList},
    data(){
        return {
            showhiden1:false, // 信息流作品列表
            showhiden:false //二维作品列表
        }
    },
    methods: {
        showTime(val){
            if(val == 1) {
                this.showhiden1 = !this.showhiden1
                this.showhiden = false
            }
            if(val == 2) {
                //二维动画类型
                this.showhiden = !this.showhiden
            }
        },
        getStatus(status) {
            this.showhiden = status
        },
        getStatus1(status) {
            this.showhiden1 = status
        }
    }
}
</script>
<style scoped>
/* .leftw {
    width: 100%;
    position: absolute;
    top: 25%;
    transform: translateY(-50%);
} */
.rightW {
    position: relative;
    width: 40%;
    top: 50%;
    transform: translateY(-50%);
}
.rightW div {
    /* border: 1px solid; */
    width: 160px;
    height: 210px;
    float: left;
}
.rightW .bg {
    width: 100%;
    height: 100%;
}
.rightW div:nth-child(2n) {
    float: right;
}
.mess-warp {
    position:relative;
}
.mess-warp .text {
    position: absolute;
    
}
.mess-warp .hiden {
    position:absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
}
.hiden {
   display: none;
}

.mess-warp:hover .hiden{
    cursor: pointer;
    transition: all .5s;
   display: block;
}
.mess-warp :hover{
    cursor: pointer;
    transition: all .5s;
    background-color: black;
    opacity: .5;
    
}

</style>