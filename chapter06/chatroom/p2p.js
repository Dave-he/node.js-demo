/**
 * 点对点消息
 * @param socket
 * @param data 点对点消息的JSON数据
 * {
 * "protocal":"p2p",
 * "from": "小红",
 * "to" : "小明",
 * "message": "你早上吃的什么"
 * }
 * @param user 用户组
 */
exports.p2p = function(socket,data,users){
    var from = data.from;
    var to = data.to;
    var message = data.message;
    var receiver = users[to];
    if(!receiver){
        var send = {
            protocal:'p2p',
            code: 2001,
            message :'用户名不存在'
        }
        socket.write(new Buffer(JSON.stringify(send)));
    }else{
        //XXX 对你说： xxx
        var send = {
            protocal:'p2p',
            code:2000,
            from:data.from,
            message:message
        }
        receiver.write(new Buffer(JSON.stringify(send)));
    }
    //如果接受人存在，则将消息发送给用户
}