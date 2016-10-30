/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-30 14:28:25
 * @version $Id$
 */

var fs = require('fs');

console.log("准备删除文件");

fs.unlink("input.txt",function(err){
	if(err){
		return console.error(err);
	}

	console.log("文件删除成功");
})