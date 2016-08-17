var http = require('http');
var connect = require('connect');
var fs= require('fs');

var app=connect();

function f(req,res,next)
{
    console.log("f");

    next();
}
app.use(f);
app.use(function (req,res,next)
{
    console.log("we are in pipe function");

    fs.createReadStream('./index.html').pipe(res);
    next();
});
app.use('/yolo',function test(req,res,next) {
    console.log("a yolo has been encountered!");

});
http.createServer(app).listen(8888);
console.log("Server is fired up!");