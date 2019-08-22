
//翻页效果封装的函数
function changepaper(changepaperbox){
	var index;
//默认第一个选中
changepaperbox.children('span').eq(0).addClass('active');
//只能显示六个
index = changepaperbox.children('span.active').index()
if(index <= 5){
	changepaperbox.children('span').eq(5).nextUntil(changepaperbox.children('span').eq(n-1)).hide()
	changepaperbox.children('span').eq(n-1).hide()
}
//右键点击事件
changepaperbox.children('input.right').click(function(){
	index = changepaperbox.children(' span.active').index();
	$(this).siblings('span').removeClass('active')
	$(this).siblings('span').eq(index).addClass('active')
	var inputleft = $(this).siblings('input.left')
	var inputright = $(this)
	changeinput(inputleft,inputright,index);
	rightshowandhide($(this).siblings('span'),index);
})
//左键点击事件
changepaperbox.children('input.left').click(function(){
	index = changepaperbox.children(' span.active').index()-2;
	$(this).siblings('span').removeClass('active')
	$(this).siblings('span').eq(index).addClass('active')
	var inputleft = $(this)
	var inputright = $(this).siblings('input.right')
	changeinput(inputleft,inputright,index)
	leftshowandhide($(this).siblings('span'),index);
})
//点击页面事件
changepaperbox.children('span').click(function(){
	$(this).siblings('span').removeClass('active');
	$(this).addClass('active');
	var inputleft = $(this).siblings('.left')
	var inputright = $(this).siblings('.right')
	index = changepaperbox.children(' span.active').index() - 1;
	changeinput(inputleft,inputright,index);
	clickspanshowandhide($(this),index)
})

//调用在开头和末尾方法改变input框的样式
function changeinput(inputleft,inputright,index){
	console.log(index)
	if(index != 0 && index != n - 1){
		inputleft.removeClass('on');
		inputleft.removeAttr('disabled');
		inputleft.css({
			cursor:'',
		})	
		inputright.removeClass('on');
		inputright.removeAttr('disabled');
		inputright.css({
			cursor:'',
		})
	}
	else if (index == n - 1){
		inputright.addClass('on');
		inputright.attr('disabled','disabled');
		inputright.css({
			cursor:'not-allowed',
		})
	}
	else if(index == 0 ){
		inputleft.addClass('on');
		inputleft.attr('disabled','disabled');
		inputleft.css({
			cursor:'not-allowed',
		})
		inputright.removeClass('on');
		inputright.removeAttr('disabled');
		inputright.css({
			cursor:'',
		})
	}
}
function rightshowandhide(span,index){
	if(index >= 5 && index != n - 1){
		span.eq(index + 1).show()
		span.eq(0).nextUntil(span.eq(index - 3)).hide()
	}
}
function leftshowandhide(span,index){
	if(index <= n - 5 && index >= 2){
		span.eq(index - 1).show()
		span.eq(index + 4).hide()
	}
}
function clickspanshowandhide(span,index){
	if(index - 3 >= 0 && index <= n - 3){
		span.siblings('span').hide();
		span.siblings('span').eq(0).show();
		span.siblings('span').eq(index - 3).nextUntil(span.siblings('span').eq(index + 2)).show()
	}
	else if(index == 2){
		span.siblings('span').hide();
		span.siblings('span').eq(0).show();
		span.siblings('span').eq(0).nextUntil(span.siblings('span').eq(index + 3)).show()
	}
	else if(index == n - 2){
		span.siblings('span').eq(index ).show();
		span.siblings('span').eq(index - 4).hide();
	}
	else if(index == 0){
		span.siblings('span').hide();
		span.siblings('span').eq(0).show();
		span.siblings('span').eq(0).nextUntil(span.siblings('span').eq(index + 5)).show()
	}
}
}
//封装一个下拉框的函数
//HTML
//<div class="option-box">
//			<input type="text" class="option-title" readonly=""/>
//			<p class="option-select">1</p>
//			<p class="option-select">2</p>
//			<p class="option-select">3</p>
//		</div>

//CSS
//*{
//	margin: 0;
//	padding: 0;
//}
//.option-box{
//	width: 200px;
//	display: flex;
//	flex-direction: column;
//	margin: 20px 0;
//}
//
//.option-box .option-select{
//	width: 100%;
//	background: #ff2d52;
//	color: #FFFFFF;
//	text-align: center;
//	border-bottom: 1px solid orange;
//	display: none;
//}


//$('.option-box').simulateOption({
//		options : '.option-box',
//		title : '.option-title',
//		selects : '.option-select'
//	})


//下拉框的封装
(function($){
//	使用方法
//$('.option-box').simulateOption({
//		options : '.option-box',
//		title : '.option-title',
//		selects : '.option-select'
//	})
 $.fn.simulateOption = function(optionbox){
// 	点击之后展示和隐藏
 	$(this).children(optionbox.title).click(function(e){
 		//自己显示出来或者隐藏，其他同类的隐藏
 		e.stopPropagation()
 		$(this).siblings().toggle()
 		$(this).parent().siblings(optionbox.options).children(optionbox.selects).hide() 
 	})
// 	给每一个下拉列表添加点击事件
 	$(this).children(optionbox.selects).click(function(){
 		var contenttext = $(this).text()
 		$(this).siblings(optionbox.title).val(contenttext) 		
 	})
$(document).click(function(){
	$(optionbox.options).children(optionbox.selects).hide()
}) 	
}
 
//提示框的封装
//使用方法
//obj = {
//reminderbox : '.all-reminder-box',
//remindername : '.reminder-error',
//type : 'success',
//content : '只有邓曦可以登录',
//}				
//$.reminderfunction(obj)
$.extend({
		reminderfunction : function(obj){
				$(obj.remindername).text(obj.content)
				$(obj.remindername).addClass('show')
			    var delay = setTimeout(function(){
					
					$(obj.remindername).removeClass('show')
					if(obj.address && obj.type == 'success'){
						obj.address()						
					}
				},3000)
			    return delay;
		}
	})

	//放大镜的封装
	$.fn.magnifying = function(){
		var wkwidth = $(this).width();
		var wkheight = $(this).height();
		var viewwidth;
		var viewheight;
		var width;
		var height;
		var bigviewwidth;
		var bigviewheight;
		var picsrc;
	//	移入产生一个框
		$(this).mouseenter(function(){
			if($('div.magnifying').length == 0){
				var popdiv = `<div class = 'magnifying'style = 'width: 100px;
				height: 100px;
				background: yellow;
				opacity: 0.5;
				position: absolute;
				top: 0;	
				left: 0;' ></div>`
			$(this).append(popdiv)
			}
			var view = ` <div class = 'view' style = '	height: 200px;
	width: 200px;
			position: absolute; overflow:hidden;right:-200px; top:0;'><img class = 'big-view'style = 'position:absolute'> </div>
			`
			$(this).append(view)
			viewwidth = $(this).children('div.view').width()
			viewheight = $(this).children('div.view').height()
			width = $(this).children('div.magnifying').width();
			height = $(this).children('div.magnifying').height();
			bigviewwidth = viewwidth/(width/wkwidth)
			bigviewheight = viewheight/(height/wkheight)
			picsrc = $(this).children('img.big-pic').attr('src')
			$(this).find('img.big-view').css({
				width : bigviewheight + 'px',
				height : bigviewheight + 'px'
			})
			$(this).find('img.big-view').attr('src',picsrc);
		})
	//移除移入时产生的框	
		$(this).mouseleave(function(){
			console.log(111)
			$(this).children('div.magnifying').remove()
			$(this).children('div.view').remove()
		})
	//产生的框跟随鼠标移动
		$(this).mousemove(function(event){
	//		console.log(event.target)
	//		var x = event.offsetX;
	//		var y = event.offsetY;
	
	////		console.log(x,y)
	//		console.log(event.target.className)
	//		if(event.target.className.indexOf('magnifying') == -1){
	//			
	//		}
			var pagex = event.pageX;
			var pagey = event.pageY;
			var postionx = $(this).offset().left;
			var postiony = $(this).offset().top;
			
			var left = pagex - postionx - width / 2;
			var top = pagey - postiony - height / 2;
			top = top < 0?   0 : top
			left = left < 0? 0 : left	
			top = top > wkheight - height  ? wkheight - height  : top
			left = left > wkwidth - width  ?  wkwidth - width  : left
			$(this).children('div.magnifying').css({
						top : top,
						left : left,
			})
			console.log(- top * (wkheight/height))
			$(this).find('img.big-view').css({
				top  :(-top * (bigviewheight/wkheight) )  + 'px', 
				left : (-left * (bigviewwidth/wkwidth)) + 'px'
			})
			
			
		})
	}





})($)



