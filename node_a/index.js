//构建第一个web服务器

//引入http模块儿
const http=require('http');

//设置服务器IP地址和端口
const hostname='127.0.0.1',port=3000;

//创建服务
const server = http.createServer((req,res)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	res.end('Hello World\n');
})