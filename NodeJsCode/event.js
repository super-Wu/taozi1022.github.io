/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-10-29 13:21:57
 * @version $Id$
 */

//引入events模块
var event = require("events");

//创建eventEm对象
var  eventEm = new event.EventEmitter();

//创建事件处理程序
var connectHandler = function(){
	console.log("连接成功");

	//触发事件
	eventEm.emit("data_received");
}

//绑定事件处理程序
eventEm.on("connection",connectHandler);

eventEm.on("data_received",function(){
	console.log("数据接收成功")
})

//触发事件
eventEm.emit("connection");

console.log("finshed");