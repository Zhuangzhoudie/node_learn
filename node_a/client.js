//net模块是用来创建服务器和客户端。它提供了一个异步网络包装
var net =require('net');
var client = net.connect({port:8080},function(){
	console.log('connected to server!');
})
client.on('data', function(data){
	console.log(data.toString());
	client.end();
})
client.on('end', function(){
	console.log('disconnected from server');
})