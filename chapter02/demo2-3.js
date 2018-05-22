//为global对象挂载一个foo变量，并将该文件模块中的foo赋值给它、
var foo = 'bar';
console.log(foo);
console.log('global:foo '+global.foo);
global.foo = foo;
//console.log(foo);
console.log('global:foo '+global.foo);
