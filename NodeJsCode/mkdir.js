/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-30 14:30:36
 * @version $Id$
 */

/*创建文件夹*/


var fs = require("fs");

console.log("创建目录/tmp/test");

fs.mkdir("./tmp/",function(err){
	if(err){
		return console.error(err);
	}

	console.log("创建目录成功")
})