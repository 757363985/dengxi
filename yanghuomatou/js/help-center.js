//将本页面的宽高返回给父级的ifram
bodysize();
//左边的检索列表动态效果

$('.floor-layer span').click(function(){
	$(this).attr('class','no');
	$(this).siblings().attr('class','yes');
	$(this).parent().next().slideToggle(1000);
})
