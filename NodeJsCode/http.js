/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-29 12:19:27
 * @version $Id$
 */

var http = require("http");

http.createServer(function(request,response){

	//发送http头部
	//状态为200,,ok
	//设置内容类型:　text/plain
	response.writeHead(200,{'Content-Type':'text/plain'});

	// 发送响应数据 hello word
	response.end("hello word\n");
}).listen(8888);



console.log("Server running at http://192.168.31.221:8888");