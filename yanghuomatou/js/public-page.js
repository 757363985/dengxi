//	右侧边栏移入会员中心动画事件
	$('.personal-icon').mouseenter(function(){
		$('.personal-text').animate({right : '30px'},500)
		
	})
//	右侧边栏移出会员中心动画事件
	$('.personal-icon').mouseleave(function(){
		$('.personal-text').animate({right : '40px'},1)
				
	})
//	右侧边栏二维码鼠标移入事件
	$('.qricon-font').mouseenter(function(){
		$('.qricon').animate({right:'30px'},500)
	})
//	右侧边栏二维码鼠标移出事件
	$('.qricon-font').mouseleave(function(){
		$('.qricon').animate({right:'50px'},1)
	})
// jquery右侧边栏回到最顶端事件
//	$('.return-top').click(function(){
//		 $('body').animate({
//		 	scrollTop : '0px',
//		 },500);
//	})
//js回到最顶端
	var returntoptimer ;
	var returntop = document.getElementsByClassName('return-top')[0];
	returntop.onclick = function(){
		var yvalue = document.documentElement.scrollTop + document.body.scrollTop;
			var returntoptimer = setInterval(function(){
				if( yvalue > 0){
					yvalue = yvalue - 10;
					document.documentElement.scrollTop = yvalue;
					document.body.scrollTop = yvalue;
				}
				else 
				{
					clearInterval(returntoptimer);
				}
			},10)	  
	}
	
//右侧边框鼠标移入客服图标事件
	$('.service').mouseenter(function(){
		$('.service-text').animate({
			right: 30 +'px',
		},500);
	})
	$('.service').mouseleave(function(){
		$('.service-text').animate({
			right: 50 +'px',
		},5);
	})
//右侧边框鼠标点击购物车事件
$('.shoping-car').click(function(){
	if($('.shoping-car-fixed-box').css('right') == '-300px'){
		$('.service-center-fixed-box').css({
			right : '-300px'
		})
	$('.shoping-car-fixed-box').animate({
		right : '30px'
	},500,function(){
	})
	}
	else {
	$('.shoping-car-fixed-box').animate({
		right : '-300px'
	},500)	
	}
})
//右固定边框鼠标点击客服中心事件
$('.service').click(function(){
	if($('.service-center-fixed-box').css('right') == '30px'){
	$('.service-center-fixed-box').animate({
		right:'-300px'
	},500)
	}
	else{
		$('.service-center-fixed-box').animate({
		right:'30px'
	},500)
	$('.shoping-car-fixed-box').css({
		right:'-300px'
	})
	}
})
//购物车点击删除事件
$('.shoping-car-fixed-commodity-delete').click(function(){
	$(this).parent().remove();
})
//js 
//var btndelete = document.getElementsByClassName('shoping-car-fixed-commodity-delete');
//for (var i = 0; i < btndelete.length;i++) {
//	btndelete[i].onclick = function(){
//		var deleteboj =  this.parentNode;
//		this.parentNode.parentNode.removeChild(deleteboj);
//	}
//}




//将本页面的height和width参数传回给主页面
var vipcenter = 'vipcenter .html'
var firstpage = 'first-page.html'
var myshoppingcar = 'my-shopping-car.html'
var clearHairWater = 'clear-hair-water.html'
var helpcenter = 'help-center.html'
var intergral = 'intergral.html'
var groupbuy = 'group-purchase.html'
$('.personal-text').click(function(){
	changeifram(vipcenter);
});

$('.first-page').click( 
	function(){
	changeifram(firstpage)})
$('.count-money-button').click(function(){
	changeifram(myshoppingcar)
})
$('.tail-content-foot').click(function(){
	changeifram(helpcenter)
})
$('.vip-center').click(function(){
	changeifram(intergral)
})
$('.together-buy').click(function(){
	changeifram(groupbuy)
})

   function changeifram(src){
	$('.ifram').attr('src', src)
} 
   
   
   //搜索框搜索洗发护发弹出搜索页面
$('.search-button').click(function(){
	var searchtext = $('.input-search').val();
	if(searchtext.indexOf('洗发')>= 0 ||searchtext.indexOf('护发')>= 0 ){
	changeifram(clearHairWater)		
	}
	else {
		alert('请输入包含洗发或者护发的文本')
	}
})
//点击退出之后重新登录单出登录界面
$('.login').css('display','none')
$('.logout').click(function(){
 	$('.logout').css('display','none')
 	$('.login').css('display','block')
});

