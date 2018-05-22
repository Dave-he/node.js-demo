/**
 * 同步代码处理 异常
 */
function parsseJsonStrToObj(str){
    return JSON.parse(str);
}
//对于同步代码，可以使用try...catch来捕获代码执行可能出现的异常
try{
    var obj = parsseJsonStrToObj('foo')
    console.log(obj);
}catch(e){
    console.log('转换失败了');
}