/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-30 14:22:50
 * @version $Id$
 */



var fs = require("fs");
var buf = new Buffer(1024);

console.log("准备打开文件");
fs.open("input.txt","r+",function(err,fd){
	if(err){
		return console.error(err);
	}

	console.log("文件打开成功");
	console.log("准备读取文件");

	fs.read(fd,buf,0,buf.length,0,function(err,bytes){
		if(err){
			return console.error(err);
		}

		if(bytes > 0){
			console.log(buf.slice(0,bytes).toString());
		}


		fs.close(fd,function(err){
			if(err){
				return console.error(err);
			}

			console.log("文件关闭成功");
		})

	})
})
