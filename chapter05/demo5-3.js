/**
 * 读取缓冲区
 */
//创建一个可以存储26个字节的内存空间对象
var buf = new Buffer(26);
//像buffer数组中存入26个字母
for(var i = 0 ; i< 26 ; i++){
    buf[i] = i+ 97;
}
console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
console.log(buf.toString('utf8',0,5));
console.log(buf.toString(undefined,0,5));