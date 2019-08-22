//点击地址事件
$('.address').click(function(){
//	变背景颜色框
	$(this).removeClass('no');
	$(this).children('.change-text').removeClass('no')
	$(this).siblings().addClass('no');
	$(this).siblings().children('.change-text').addClass('no')
//将值取出来，赋予需要的地方
//  console.log()
    var arraddress = $(this).children('p').text().split('  ');
    console.log(arraddress)
    for(var i = 0;i < 3; i++){
    $('.btn-pay-box-left').children()[i].innerText = arraddress[i];
		    	
    }

})


$('.sending-way').click(function(){
	$(this).addClass('active')
	$(this).siblings().removeClass('active')
})
