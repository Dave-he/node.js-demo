/**
 * 通常情况下，每个请求路径都会对应一个具体的处理函数
 */
exports.showIndex = function(req,res){
    res.render('index',{
        title : 'Index'
    })
}
exports.showAdd = function(req,res){
    res.render('add',{
        title: '添加音乐'
    })
}
exports.showEdit = function(req,res){
    res.render('edit',{
        title : '编辑音乐'
    })
}