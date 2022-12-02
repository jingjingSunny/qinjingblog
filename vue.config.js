const data = require('./data/data.json');
module.exports = {
    configureWebpack:{
        performance: {
            hints: 'warning',
            // 入口起点的最大体积
            maxEntrypointSize: 50000000,
            // 生成文件的最大体积
            maxAssetSize: 30000000,
            // 只给出 js 文件的性能提示
            assetFilter: function (assetFilename) {
                return assetFilename.endsWith('.js')
            }
            },
    },
    
    devServer: {
        // process.env.NODE_ENV === 'production' ? 'http://localhost:8081/': '',
        publicPath:process.env.NODE_ENV === 'production' ? 'http://localhost:8081/': '',
        // parallel: false,
        // assertsDir:'static',
        // 本地访问
        host: 'localhost',
        port: 8081,
        before(app) {
            http://localhost:8081/data,
            app.get("/data", (req, res) => {
                // console.log(123456)
                res.json(data);
            });
        },
        proxy: {
            '/api':{
                // 接口域名
                target: 'http://localhost:8081',
                // 如果接口跨域的参数配置
                ws: true,
                changeOrigin: true,
                // 重定向 字符串替换
                pathRewrite:{'^/api': ''}
            }
        }
    },
}