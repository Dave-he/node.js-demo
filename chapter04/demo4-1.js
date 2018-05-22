var fs = require('fs');

try{
    console.log('写入文件...')
    fs.writeFileSync('E:/a.txt','程序员');
}catch(e){
    console.log('不好意思，文件写入失败')
}