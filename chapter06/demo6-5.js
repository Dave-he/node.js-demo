/**
 * 双向通信--服务器
 */
//加载net模块
var net = require('net');
var server = net.createServer();
server.on('connection',function(socket){
    socket.on('data',function(data){
        console.log('data',toString());
        socket.write('小豆包');
    });
});
server.listen(4000,'127.0.0.1',function(){
    console.log('server listening at port 4000');
});