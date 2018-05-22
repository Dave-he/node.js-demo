/**
 * Net.Servet创建服务器
 */
//1.加载net核心模块
var net = require('net');
var server = net.createServer();
server.on('connection',function(){
    console.log('有客户端连接上来了');
});
server.on('listening',function(){
    console.log('服务器开启监听成功了，正在等待客户端连接');
});

server.listen(3000,'127.0.0.1');