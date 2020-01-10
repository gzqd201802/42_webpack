// 引入 path 模块
const path = require('path');

// 导出
module.exports = {
    // 入口文件
    entry: './src/index.js',
    // 输出位置
    output: {
        // 打包后到那个文件夹
        path: path.join(__dirname, 'dist'),
        // 打包后的文件名
        filename: 'bundle.js',
    },
    // 模块 组件
    module: {
        // 规则
        rules: [
            {
                // 检验匹配那类文件.
                test: /\.css$/,
                // 需要使用哪些 loader处理 css 文件
                use: ['style-loader', 'css-loader']
            }
        ]
    },
};