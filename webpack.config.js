const webpack = require("webpack");
const config = {
    entry: __dirname + "/src/index.js", //配置入口文件
    output: {
        path: __dirname + "/build", //打包文件的输出文件夹
        filename: "build.js" //打包文件的名字
    },
    devServer: {
        port: 8011,
        host: "192.168.0.233",
        useLocalIp: true,//允许使用本地ip打开
        open: false, //是否打开浏览器，
        contentBase: "./build",
        publicPath: "./build",//这个目录下的文件在浏览器中可以直接访问
        index: "path", //可以修改索引文件名
        openPage: 'path.html',//浏览打开的时候，默认访问的链接地址
        historyApiFallback: true, //不跳转  
        inline: true, //实时刷新,
        proxy: {
            //配置需要转发的接口
            "/webapp/**": {
                target: "http://192.168.0.193", //需要转发到哪里
                changeOrigin: true,
                secure: false //是否加密
            },
        },
        overlay: {//如果有错误的信息，直接全屏覆盖提示
            warnings: true,
            errors: true
        }
    }
}
module.exports = config;