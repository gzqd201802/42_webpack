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
    }
};