var net= require('net');
var server = net.createServer();
server.on('connection',function(socket){
    console.log('有客户端连接上来了');
    console.log('客户端IP地址:'+socket.remoteAddress +'连接到了当前服务器');
    socket.write('hello world');
});
server.on('listening',function(){
    console.log('服务器开启监听成功了，正在等待客户端连接');
});

server.listen(3000,'127.0.0.1');
