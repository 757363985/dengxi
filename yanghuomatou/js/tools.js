	//我的笔记本看来不兼容这种办法,不管是什么浏览器，这两种方法中只有一种能够获取到值，
//	document.body.scrollTop document.body.scrollLeft
//我的笔记本所用的谷歌浏览器,适合这种办法
//	document.documentElement.scrollTop document.documentElement.scrollLeft
//	所以将两种方法都写出来,并且相加一定能够得到正确的值
   window.getscrolloffset = function(){
	if(window.pageXOffset){
		return {
			x : window.pageXOffset,
			y : window.pageYOffset,
		}
	}
	else{
		return{
		x: document.body.scrollLeft + document.documentElement.scrollLeft,
		y: document.body.scrollTop + document.documentElement.scrollTop,
	}
	}
	}
// 写一个查看屏幕尺寸的方法，想办法做到兼容
   	window.getscreensize = function(){
   	//在标准模式下执行，w3c标准
   	if(window.innerWidth){
   		return {
   			width : window.innerWidth,
   			height : window.innerHeight,
   		}
   	}
   	//在标准模式下执行
   	else if(document.documentElement.clientWidth){
   		return{
   			width : document.documentElement.clientWidth,
   			height : document.documentElement.clientHeight,
   		}
   		}
   		else if (document.compatMode === 'BackCompat' )
   		{
   			//在怪异模式下执行
   			return{
   				width : document.body.clientWidth,
   				height : document.body.clientHeight,
   			}
   		}
   		else {
   			
   		}
   	
  	}
// 第一个形参不需要加引号,第二个形参需要加引号，用来获取css上的样式具体的值
    window.getCssStyle = function(element,attribute){
    	if(window.getComputedStyle){
    		return	window.getComputedStyle(element,null)[attribute];	
    	}
    	else{
    		return	element.currentStyle[attribute];
    	}	
    }
//用一种方法，来实现给某个元素，增加添加一个事件,第二个参数需要加 ' ',第三个参数是function。
   	window.addEvent = function (element,eventtype,handle){
   	if(element.addEventListener){
   		element.addEventListener(eventtype,handle,false);
   	}
   	else if(element.attachEvent){
   		element.attachEvent('on' + eventtype,function(){
   			handle.call(element);
   		} )
   	}
   	else {
   		element['on' + eventtype] = handle;
   	}
   	}
//用一种方法来实现冒泡排序法，封装兼容，解决事件冒泡的问题，被用在事件函数内部。
	function stopBubble(e){
		if(e.stopPropagation)
		{
			e.stopPropagation();
		}
		else{
			e.cancelBubble();
		}
	}
//检测子页面的body宽与高,将值赋给父页面的ifram标签的width和height
	function bodysize (){
		var width = $('body').innerWidth();
		var height = $('body').innerHeight();
		window.parent.$('iframe').css({
			height : height + 'px',
			width : width + 'px',
		})
	}
//ajxa封装
function ajaxpack(argument){
	var request = new XMLHttpRequest();
	request.open(argument.type || 'get',argument.url, argument.async || true)
	request.send(argument.senddata || null)
	request.onreadystatechange = function(){
		if(request.readyState == 4 && request.status == 200){
			if(argument.datatype == 'json'){
				var data = JSON.parse(request.responseText)
				argument.success(data);
			}
			else{
				var data = request.responseText
				argument.success(data);
			}
		}
	}
}

