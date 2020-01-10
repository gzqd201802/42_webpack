// 这个语法是导入一个 style.css 文件
import './style.css';
// 通过 import 语法导入一个 style.less 文件
import './style.less';

// 写入到html的内容
const element = document.createElement("div");

element.innerHTML =  `
    <div class="red">Hello 老班</div>
    <div class="blue">hello webpack and less</div>
`;

document.body.appendChild(element);