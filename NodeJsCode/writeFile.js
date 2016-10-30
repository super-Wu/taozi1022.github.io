/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-30 14:10:40
 * @version $Id$
 */


var fs = require("fs");

console.log("准备写入文件");
fs.writeFile("a.txt","我是写入的文件aaa",function(err){
	if(err){
		return console.error(err);
	}

	console.log("数据写入成功");
	console.log("-----------------");
	console.log("读取写入的数据");
	fs.readFile("a.txt",function(err,data){
		if(err){
			return console.error(err);
		}

		console.log("异步读取文件数据 : " + data.toString());
	})
})
