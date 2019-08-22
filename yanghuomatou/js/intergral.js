//获取页面的高度
bodysize();
//积分系统
var intergralcount = $('.intergral-box .remain .intergral-count').text();
//优惠券系统
var countdown = $('.intergral-box .remain .countdown-paper').text()
//图片切换
var index = 0;
//图片切换定时器
var slideshowinterval;
//轮播图
//根据图片的数量，自动生成圆圈的个数
$('.circle-box').empty();
var circlecount = $('.slideshow-part .img-box img').length;
for (var i = 1 ; i <= circlecount; i++){
	var circleli = `<li>${i}</li>`
	$('.circle-box').append(circleli);
}
//正常轮播时
slideshow();
function slideshow(){
	slideshowinterval = setInterval(function(){
		$('.slideshow-part .img-box img').eq(index).siblings('img').fadeOut(100)
		$('.circle-box li').eq(index).siblings().removeClass('active')
		$('.circle-box li').eq(index).addClass('active')
		$('.slideshow-part .img-box img').eq(index).fadeIn(4000);
		index ++;
		if(index == 3){
			index = 0
		}
	},4400)
}
//圆点移入事件
$('.circle-box li').mouseenter(function(){
	index = $(this).index();
	clearInterval(slideshowinterval);
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
	$('.slideshow-part .img-box img').css({
		display : 'none',
		opacity : 1
	})
	$('.slideshow-part .img-box img').eq(index).css({
		display: 'block',
	})
})
//鼠标移出圆点定时器重启
$('.circle-box li').mouseleave(function(){
	slideshow();
})


//所有的商品盒子添加移入事件
$('.exchange-commodity-box').mouseenter(function(){
	$(this).addClass('active');
})
$('.exchange-commodity-box').mouseleave(function(){
	$(this).removeClass('active');
})
//优惠券兑换
$('.count-paper-btn').click(function(){
	var conslut = confirm('是否兑换优惠券')
	if(conslut == true ){
		intergralcount = intergralcount -  $(this).children('.how-intergral').text()
		if(intergralcount >= 0){
			countdown ++;
			$('.intergral-box .remain .countdown-paper').text(countdown);
			$('.intergral-box .remain .intergral-count').text(intergralcount)
			$(this).css({
			background:'#999999'
			})
			$(this).text('已兑换')
			$(this).unbind()
			}
		else{
			intergralcount = intergralcount + parseInt($(this).children('.how-intergral').text() ) 
			alert('积分不够，兑换失败')
		}
	}
	console.log(intergralcount);
})
//商品兑换
$('.exchange-btn-yes').click(function(){
	var conslut = confirm('是否兑换该商品')
	if(conslut == true){
		intergralcount = intergralcount - 1000
		if(intergralcount >= 0){
			$('.intergral-box .remain .intergral-count').text(intergralcount);
			$(this).removeClass('active');
			$(this).siblings('.exchange-btn-no').addClass('active').val('已兑换')
			$(this).unbind()
		}
		else{
			intergralcount = intergralcount + 1000
			alert('积分不够，兑换失败')
		}
	}
})
//签到之后变成已签到
$('.sign-in').click(function(){
	var conslut = confirm('是否签到')
	if(conslut == true){
	$(this).css({background : '#999999',})		
	}
	$(this).unbind()
})


//倒计时
countdowntime('2019-8-19 00:00:00');
function countdowntime(future){
    var daojishi = setInterval(timer1,1000 )
    function timer1(){
	var stoptime = new Date(future).getTime();
	var startime = new Date().getTime();
	remaintime = stoptime - startime;
	var days = Math.floor(remaintime / (1000 * 60 * 60 * 24))
	var hours = Math.floor((remaintime - days * 1000 * 60 * 60 * 24)  / (1000 * 60 * 60))
	var minutes = Math.floor((remaintime - days * 1000 * 60 * 60 * 24 - hours * 1000 * 60 * 60)/ (1000 * 60));
	var seconds = Math.floor((remaintime - days * 1000 * 60 * 60 * 24 - hours * 1000 * 60 * 60 - minutes * 1000 * 60) / 1000);
	var arr = [];
	var a = function(num){
		if(num <= 9){
			arr.push(0);
			arr.push(num);
		}
		else{
			var shiwei = (num - num % 10) / 10;
			var gewei = num % 10;
			arr.push(shiwei);
			arr.push(gewei);
		}
	}
	a(days);
	a(hours);
	a(minutes);
	a(seconds);	
    callback(arr);
	}

} 
function callback(arr){
	var len = $('.limited-time ').length;
	var limited;
	var limitedtext = /^[0-9]/
	for (var i = 0; i <len; i++ ) {
	limited = $('.limited-time ').eq(i).text();
	var conslut = limitedtext.test(limited);
	if(conslut){
	$('.limited-time ').eq(i).empty();
	var html  = `${arr[0]}${arr[1]}天${arr[2]}${arr[3]}时${arr[4]}${arr[5]}分${arr[6]}${arr[7]}秒`
	$('.limited-time ').eq(i).text(html);
	}
	}
}




