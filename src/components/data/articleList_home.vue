<template>
    <div class="home_warp" >
        <div class="clearfloat mt" 
                v-for="(item,index) in article" 
                :key="index" 
               
                :timestamp="item.createTime" 
                placement="top"
            >
                <div class="list-inner"  @click="toArticle(index)" >
                    <div class="img"><img :src="require('../../assets/img/dataimg/' + item.src)" /></div>
                    <div class="img-bot">
                        <span class="title">{{item.title}}</span>
                        <p class="speak">{{item.abstract}}</p>
                       
                    </div>
                </div>
            </div>
        <el-pagination
            small
            layout="prev, pager, next"
            :total="total"
            :page-size="showNum"
            @current-change="changepage"
            :current-page=currentpage
            >
        </el-pagination>
        <!-- <canvas id="catw" width="500" height="500" style="position: fixed; bottom: 0;right:0;"></canvas> -->
    </div>
</template>
<script>
import { MessageBox} from 'element-ui'
export default {
    name:'articleList',
    created(){
        // 请求页面所有数据
        this.Indxaxios();
    },
    data(){
        return {
            // allData 源数据、
            allData:[],
            // 文章列表
            article: [],
            // 作品列表
            workshow: [],
            // 当前页
            currentpage:1,
            // 显示条数
            showNum:3,
            // 总条数
            total:10,
        }
    },
    methods: {
        // 首页数据请求方法
        Indxaxios(){
            let _this = this;
            // 准备参数
            // /data/data.json
            
            _this.$axios.get('/qinjingblog/data/data.json',{}).then(res=>{
                _this.allData = res.data.data.article;
               _this.getTabeData()
                 // 转换时间
                // _this.allData.map(item=>{
                //     return item.createTime = _this.$common.getDate(item.createTime,true)
                // })
                //     // 放入数据
                // _this.article = source.slice(
                //     (_this.currentpage - 1) * _this.showNum,
                //     _this.currentpage * _this.showNum
                // );
                // _this.total = source.length;

            }).catch()
        },
        // 跳转文章列表
        toArticle() {
            MessageBox.confirm(
				`<h4 style="color:balck">`+'数据规划中~'+`</h4>`,
				{
					type: 'confirm',
					dangerouslyUseHTMLString:true,
					showCancelButton: false,
					closeOnClickModal: false
				}
			);
            // this.$router.path({
                
            // })
        },
        //分页
        changepage(val){
            this.currentpage = val;
            this.getTabeData();
        },
        // 开始分页渲染
        getTabeData(){
            // 转换时间
            this.allData.map(item=>{
                return item.createTime = this.$common.getDate(item.createTime,true)
            })
            this.article = this.allData.slice(
                (this.currentpage - 1) * this.showNum,
                this.currentpage * this.showNum
            );
            this.total = this.allData.length;
        }

    }
}
</script>

<style scoped lang="scss">

.list li {
    background-color: #fff;
    margin-bottom: 5px;
    // box-shadow: 0 0 5px rgba(0, 0, 0, .1);
    padding: 10px;
    border-radius: 2px;
    // border-bottom: 1px solid rgba(0, 0, 0, .1);
    transition: all .5s ;
}
.list-inner {
 display: flex;
}
.clearfloat::after {
    content: "";
    display: block;
    clear: both;
    overflow: hidden;
}
.img {
    margin-right: 20px;
    height: 110px;
}
.img-bot {
    display: flex;
    flex-direction: column;
    align-items: unset;
    justify-content: space-around;
}
.img img {
    height: 100%;
}
.title {
    font-size: 18px;
    line-height: 16px;
    display: block;
    color: #141517;
}
.zan {
    display: inline-block;
    margin-top: 6px;
}
.zan img{
   height: 12px; 
}
.speak {
   display: -webkit-box;
   word-wrap:break-word; 
   overflow:hidden;
   text-overflow: ellipsis;
   -webkit-box-orient: vertical;
   -webkit-line-clamp:3;
   font-size: 14px;
   line-height: 18px;
   color: #999;
}
.mt {
    margin-bottom: 10px;
}
</style>