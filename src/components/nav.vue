<template>
    <div class="warp">
        <div class="top-nav clearBoth">
            <!-- 标题 -->
            <!-- <div class="nav-logo left"><h3>{{$TITLE}}</h3></div> -->
            <!-- 导航 -->
            <div class="nav-list right">
                <el-menu
                    class="menuArr"
                    mode="horizontal"
                >
                    <el-menu-item v-for="(item, index) in $MENUARR" v-bind:key="index" >
                        <router-link :to="item.url">
                            {{item.name}}
                        </router-link>
                        
                    </el-menu-item>
                </el-menu>
            </div>
        </div>
        <router-view class="warp-content"></router-view>
    </div>
</template>

<script>
export default {
    name: 'Nav',
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
    }
}
</script>
<style scoped lang="scss">
.warp {
    display: flex;
    flex-direction: column;
}
// .warp-content {
//     flex: 1;
// }
.warp .zhuanshitu {
    height: 117px;
}
.el-menu {
    background-color: transparent;
}
.nav-list {
    width: 1200px;
    margin: 0 auto;
}
.el-menu-item:focus, .el-menu-item:hover {
    background-color: transparent;
}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover{
        background-color: transparent;
}
// 设置导航li
.menuArr  {
    height: 96px;
    
    li {
        margin: 0 10px;
        line-height: 96px;
        a {
            font-style: italic;
        }
        &:last-child {
            margin-right:  0;
        }
        &::after {
            content: '';
            display: inline-block;
            height: 10px;
            width: 1px;
            background-color: #909399;
            transform: rotate(30deg);
            position: absolute;
            right: -11px;
            top: 50%;
            margin-top: -5px;
        }
        &:last-child::after{
            content: none;
        }
    }
}

</style>