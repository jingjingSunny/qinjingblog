<template>
    <div>
        <div class="left leftw">
            <!-- 首页文章列表 -->
            <articleList></articleList>
        </div>
        <!-- 首页作品列表 -->
        <div class="right rightW">

        </div>
    </div>
</template>
<script>
import articleList from '../components/data/articleList_home'
export default {
    name: 'Articel',
    components: {articleList},
    methods: {
    }
}
</script>
<style scoped>
.leftw {
    width: 60%;
}
.rightW {
    width: 40%;
}
</style>