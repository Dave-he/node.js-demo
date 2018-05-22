/**
 * 双向通信-客户端
 */

 var net = require('net');
 var client = net.createConnection({
     port:4000
 });
 client.on('connect ',function(){
    console.log('客户端与服务器连接成功了');
    client.write('吃了没');
 });
 client.on('data',function(data){
    console.log(data.toString());
 });