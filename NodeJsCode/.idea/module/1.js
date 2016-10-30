/**
 * Created by TF on 2016/8/30.
 */
/*一个文件就是一个模块
* 每个模块都有自己的作用域
* */


/*
var a = 100;
console.log(a);     //100

global.a = 200;

console.log(a)           //100
console.log(global.a)   //200

*/

//////__filename  :当前文件被解析过后的绝对路径
console.log(__filename)     //E:\miaov\js\NodeJsCode\.idea\module\1.js

require('./2.js');
