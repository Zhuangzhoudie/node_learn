//net模块是用来创建服务器和客户端。它提供了一个异步网络包装
var net = require('net');
var server = net.createServer(function(connection){
	console.log('client connected');
	connection.on('end',function(){
		console.log('client discounnected');
	});
	connection.write('Welcome to Yiibai');
	connection.pipe(connection)
});
sever.listen(8080,function(){
	console.log('sever is listening')
})