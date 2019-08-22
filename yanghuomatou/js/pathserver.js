var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path')
http.createServer(function(request,response){

	if(request.url !== '/favicon.ico'){

//		获取用户输入的路由名称，并将/去掉，以便用于创建函数名
		var pathname = url.parse(request.url).pathname.substr(1);
		var requestUrl = pathname;
//		if(request.url == 'login') {
//			requestUrl = '测试.html'
//		}
//__exname拓展名
		var extname = path.extname(requestUrl)
//为了闭包能够将data保存下来		
		getData(requestUrl, extname, function(type, data){
			response.writeHead(200,{'Content-Type':type})
			response.write(data)
			response.end()
		})
			
//		otherfunction[pathname](request,response);
		console.log('同步执行完毕');		
	}
}).listen(3004);


function getData(requestUrl, extname, callback) {
	console.log(path.resolve(__dirname,'..\\'+ requestUrl))
//	对域名进行处理 
	fs.readFile(path.resolve(__dirname,'..\\'+ requestUrl), function(err, data){
			if(extname == '.html') {
				type = 'text/html;charset=utf-8'
			}else if(extname == '.css') {
				type = 'text/css'
			}else {
				type = 'text/panel'
			}
			console.log(err)
			console.log(data)
			callback(type , data)
		})
}