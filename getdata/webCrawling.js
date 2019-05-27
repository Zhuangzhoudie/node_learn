const http = require('http');
const express = require('express');
const cheerio = require('cheerio');
var list=[];
var reg=/^(http://download.zikao365.com/shiti/)[\s\S]+(.pdf)$/g;
var pageUrl = 'http://www.zikao365.com/shiti/downlist_search.shtm';

//封装对象
function webCrawling(argument) {
	getList(pageUrl,cb(res){
		if (res == true) {
			
		} else{
			
		}
	})
}
//获取列表页面的链接
function getList(pageUrl,cb) {
	var req = http.get(pageUrl, function(res) {
		let pagedata = '';
		res.setEncoding('utf8');
		res.on('error', function(errget) {
			//出错处理
		});
		res.on('data', function(chunk) { //监听事件：数据传输
			pagedata += chunk;
		});
		res.on('end', function() { //数据传输完
			let $ = cheerio.load(pagedata); //cheerio模块开始处理DOM
			let eleList = $('.bot a');
			for (let i = 0; i < eleList.length; i++) {
				let ahref = $(eleList.eq(i)).attr('href');
				if (ahref.indexOf('shiti') >= 0) {
					list.push(ahref)
				}
			}
			if($('.num.hover').next().hasClass('num')){
				getList(pageUrl+'?page='+$('.num.hover').next().text());
			}else{
				cb(true);
			}
		});
	})
}

//获取页面详细内容,正则查找也买你网址
function downLoad(pageUrl){
	var req = http.get(pageUrl, function(res) {
		let pagedata = '';
		res.setEncoding('utf8');
		res.on('error', function(errget) {
			//出错处理
		});
		res.on('data', function(chunk) { //监听事件：数据传输
			pagedata += chunk;
		});
		res.on('end', function() { //数据传输完
			let $ = cheerio.load(pagedata); //cheerio模块开始处理DOM
			let pdfurl=reg.exec(pagedata);
			
		});
	})
}
