//node.js-回调概念
//回调是一种异步,相当于一个函数.会带哦函数被调用在完成既定任务后,Node大量使用了回调.
//Node所有的API写的都是支持回调的这一种方式.
//例如:一个函数读取一个文件,可能开始读取文件,并立即返回控制到执行环境,使得下一个指令可以马上被执行
//一旦文件I/O完成,它会调用回函数,同时传递回调函数,该文件作为参数的内容.
//因此不会有堵塞或等待文件I/O.这使得Node.js高度可扩展,因此可以处理大量的请求,而无需等待任何函数来返回
//阻塞代码示例：
//创建一个名未test.js的js文件
var fs=require('fs');
var data=fs.readFileSync('test.txt');
console.log(data.toString());
console.log('Program Ended');
//非阻塞代码示例：
var fs=require('fs');
fs.readFile('test.txt',function(err, data){
	if(err) return console.error(err);
	console.log(data.toString());
})
console.log("Program Ended");
//事件循环概述
//NodeJS是单线程应用程序,但它通过事件和回调的概念,支持并发.
//NodeJS的每一个API都是异步的,作为一个单独的线程，它使用异步函数调用来维护并发。
//Node使用观察者模式。Node线程保持一个事件循环，每当任何任务完成后得到结果，
//它出发通知事件侦听函数来执行相应的事件。
//事件驱动编程
//Node.js使用大量事件，这也是为什么Node.js相对与其他类似技术比较快的原因之一。
//当Node启动其服务器，就可以简单地初始化其变量，声明函数，然后等待事件的发生。
//虽然事件似乎类似于回调。不同之处在于当回调函数被调用异步函数返回结果，其中的事件处理工作在观察者模式。
//监听事件函数作为观察者.每当一个事件被解雇,其监听函数开始执行.
//Node.js有多个内置事件,主要扮演这是EventEmitter,可以使用一下语法导入:
//import events module
var events = require('events');
//create an eventEmitter Object
var eventEmitter = new events.eventEmitter();
//示例:
//import events module
var events = require('events');
//create an eventEmitter Object
var eventEmitter = new events.eventEmitter();

//create a function connected which is to be executed
//when 'connection' event occurs
var connected = function connected(){
	console.log('connection successful');
	//fire the data_received event
	eventEmitter.emit('data_received');
}

//bind the connection event with the connected function
eventEmitter.on('connection',connected);

//bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
	console.log('data received successfully')
})
//fire the connection event
eventEmitter.emit('connection');
console.log('Program Ended.')

//Node应用程序如何工作?
//在Node应用,任何异步函数接受回调作为最后的参数,并回调函数介绍错误未第一个参数.
//示例
var fs=require('fs');
fs.readFile('test.text',function(err,data){
	if(err){
		console.log(err.stack);
		return;
	}
	console.log(data.toString());
});
console.log("Program Ended");