//构建第一个web服务器

//引入http模块儿 使用require指令来加载HTTP模块儿
const http=require('http');

//设置服务器IP地址和端口
const hostname='127.0.0.1',port=3000;

//创建服务 req服务器要求接收的数据，res返回给客户端的数据
const server = http.createServer((req,res)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	res.end('Hello World\n');
})

//启动服务器 实现实时监听
server.listen(port, hostname, ()=>{
	console.log(`Server running at http://${hostname}:${port}/`)
})

//在命令行中 node 该 js 即可在http://localhost:3000路径下打印出'hello world'
//Node.js = 运行环境+ JavaScript库
//Node.js自带运行时环境可在Javascript脚本的基础上可以解释和执行(这类似于JVM的Java字节码)。
//这个运行时允许在浏览器以外的任何机器上执行JavaScript代码。由于这种运行时在Node.js上，所以JavaScript现在可以在服务器上并执行。
//Node.js还提供了各种丰富的JavaScript模块库，它极大简化了使用Node.js来扩展Web应用程序的研究与开发。

//Node.js库的异步和事件驱动的API全部都是异步 就是非阻塞
//它主要是指基于Node.js的服务器不会等待API返回的数据,会直接移动到下一个API调用

http.createServer(function(request, response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end('Hello World\n');
}).listen(8081);
// 该格式可以识别HTML结构，编码格式是UTF-8
// res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
// 该格式不可以识别HTML结构
// res.writeHead(200,{'Content-Type':'text/plain;charset=UTF8'});
// 该格式识别图片
// res.writeHead(200,{'Content-Type':'image/jpg;charset=UTF8'});
// 该格式识别样式
// res.writeHead(200,{'Content-Type':'text/css;charset=UFT8'});
