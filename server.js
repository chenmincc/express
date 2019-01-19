const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use(cookieParser());
app.use(express.static('public'));

app.set('views','./views');
app.set('view engine','ejs');

app.get('/',function(req,res){
    res.write('hello express');
    res.end();
});
app.get('/login',function(req,res){
    res.write('hello login');
    res.end();
});
app.post('/post',function(req,res){
    console.log(req.body);
    console.log('我是一个post请求的回调函数');
    res.write('hello post');
    res.end();
});
app.get('/getCookie',function(req,res){
    console.log(req.cookies);
    res.write('get ok');
    res.end();
});
app.get('/hostname',function(req,res){
    console.log(req.hostname);
    res.write('hostname');
    res.end();
});
app.get('/ip',function(req,res){
    console.log(req.ip);
    res.write('ip');
    res.end();
});
app.get('/params/:id/:xx',function(req,res){
    console.log(req.params);
    res.write('params');
    res.end();
});
app.get('/path',function(req,res){
    console.log(req.path);
    res.write('path');
    res.end();
});
app.get('/protocal',function(req,res){
    console.log(req.protocal);
    res.write('protocal');
    res.end();
});
app.get('/get',function(req,res){
    if(req.get('User-Agent').indexOf('Mobile')!=-1){
        // res.write('mobile')
        // res.send('手机');
        res.redirect('http://www.baidu.com')
    }else{
        // res.write('pc')
        res.send('电脑');
    }
    // res.end();
});
app.get('/setCookie',function(req,res){
    res.cookie('name','tom',{
        maxAge:60*1000*10
    })
    res.send('cookie设置成功') 
});
app.get('/sendFile',function(req,res){
   var data = res.sendFile(path.resolve(__dirname,"./public/index.css"));
    console.log('是否可以进来')
    res.send("haha");
});
app.get('/render',function(req,res){
    res.render('index',{
        name:'张三',
        age:15,
        abc:'<h1>首页</h1>',
        list:[ 
            {run:'唱歌'}, 
            {run:'跳舞'},
            {run:'卡拉OK'} 
        ]
    })
    res.end()

})   

app.listen(3000);
console.log("成功启动服务")