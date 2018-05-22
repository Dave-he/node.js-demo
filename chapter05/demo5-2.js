/**
 * 写入缓冲区
 */
//创建一个可以存储5个字节的内存空间对象
var buf = new Buffer(5);
console.log(buf.length);
buf.write('a');
console.log(buf);
buf.write('b',1,1,'ascii');
console.log(buf);