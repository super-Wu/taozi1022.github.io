/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-30 13:58:09
 * @version $Id$
 */

var fs = require("fs");

/*console.log("准备打开文件!");
fs.open('input.txt','r+',function(err,fd){
	if(err){
		return console.error(err);
	}
	console.log("文件打开成功");
})
*/

/*fs.stat("E:/miaov/js/NodeJsCode/file.js",function(err,stats){
	console.log(stats.isFile());	//true
	console.log(stats.isDirectory());	//false
})*/

console.log("准备打开文件!");
fs.stat("input.txt",function(err,stats){
	if(err){
		return console.error(err);
	}
	console.log(stats);
	console.log("读取文件成功");
	console.log("是否为文件?" + stats.isFile());
	console.log("是否为目录?" + stats.isDirectory());

})