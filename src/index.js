// 这个语法是导入一个 style.css 文件
import './style.css';

// 写入到html的内容
const element = document.createElement("div");

element.innerHTML =  `<div class="red">Hello 老班</div>`;

document.body.appendChild(element);