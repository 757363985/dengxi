//创建n个页面
$('.change-paper span').remove();
var newbtn;
var n = 40
for(var i = 0; i < n;i++){
//	清空后全部重新创建
	newbtn = `<span class="page">${i + 1}</span>`
	$('.change-paper .right').before(newbtn);
}
var changegroup = $('.change-group-paper');
changepaper(changegroup);
//商品盒子移入事件
$('.commodity-box').mouseenter(function(){
	$(this).children('.commodity-btn').addClass('active')
	$(this).addClass('active')
	
})
$('.commodity-box').mouseleave(function(){
	$(this).children('.commodity-btn').removeClass('active')
	$(this).removeClass('active')
	
})
//导航栏点击事件
$('.nav-lists').children('.nav-list').click(function(){
	$(this).siblings().removeClass('active')
	$(this).addClass('active')
})

bodysize();

//图片，懒加载
$('img').lazyload({
	//放一个图片站位
	placeholder:'./img/nothing-icon.jpg',
	//图片的方式
	effect:"slideDown",
})