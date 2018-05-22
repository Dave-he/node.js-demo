/**
 * 使用pipe（）进行文件复制
 */
var fs = require('fs')
var srcPath = 'input.txt';
var distPath = 'output.txt';
var readableStream = fs.createReadStream(srcPath);
var writableStream = fs.createWriteStream(distPath);

if(readableStream.pipe(writableStream)){
    console.log('文件复制成功了')
}else{
    console.log('文件复制失败了')
}