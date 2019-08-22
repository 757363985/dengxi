//评论部分
$('.comment-btn').click(function(){
	$('.input-comment').fadeToggle()
})
$('input.btn-comment').click(function(){
	var commentcondition = confirm('是否发表评论？')
	if(commentcondition){
		var commenttext = $('textarea.input-text').val();
		if(commenttext !=''){
		var html = `<div class="comment-detail-content-box">
					<div class="user-header-icon clearfix">	
						<img src="img/person-header.jpg"/>
						<p class="user-name">h*****lo</p>	
					</div>
					<div class="main-text">
							<span class="kind-of-coment">好评</span>
							<span>丨</span>
							<span class="coment-time">2012-03-07</span>
							<p class="conment-text">${commenttext}</p>
					</div>
				</div>`
		$('.comment-detail-lists-box').after(html)
	}
		else{
			alert('请输入有效的评论')
		}
	}	
})	
//重写翻页效果	
//创建n个页面

$('.change-paper span').remove();
var newbtn;
var n = 40
for(var i = 0; i < n;i++){
//	清空后全部重新创建
	newbtn = `<span class="page">${i + 1}</span>`
	$('.change-paper .right').before(newbtn);
}


var changecoment = $('.change-coment');
var changesale = $('.change-sale');
changepaper(changesale);
changepaper(changecoment);

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