//Node.js 事件发射器
//eventEmitter类在于事件的模块.其语法如下:
//import events module 
var events = require('events');
//create an eventEmitter Object
var eventEmitter=new events.eventEmitter();
//当eventEmitter实例出现任何错误,它会发出"error"事件.
//当新的监听器添加,'newListener'事件被触发
//当一个监听器被删除,'removeListenser'事件被出发
//eventEmitter提供多种属性,如:on和emit.on属性用于绑定于该事件的函数,而emit用于触发一个事件.