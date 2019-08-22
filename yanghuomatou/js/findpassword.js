
//每一次input框的聚焦，都应该将按钮的事件取消，
$('.phone-number-input-box').click(function(){
//	让电话号码的边框成为红色
	$(this).css({borderColor : '#ff2d52'})
	$(this).next('.reminder').css({display:'inline-block' })
	
})
    var phoneText = /^1[345789][0-9]{9}$/
    var codeText =/^[0-9]{4}$/
    //当input框失去焦点以后，
    $('.phone-number-input').blur(function(){
//  	让边框恢复成原来的颜色
    	$(this).parent().css({borderColor : '#cccccc'})
//  	
    	
    	if (phoneText.test($('.phone-number-input').val())){
//  		这三种方法都是可以的
//  		$(this).parent().next().css({display:'none'})
    		$(this).parent().nextAll('.reminder').css({display:'none'})
//			$('.first-step-three-layer .reminder').css({display:'none'})
		}
    	   })
    	
    	


// 如果验证码和电话号码都符合条件,才进入下一个步骤   		
$('.first-step-five-layer').click(function(){
    if( codeText.test($('.verification-code-input').val()) && phoneText.test($('.phone-number-input').val())){
    	$('.find-password-box').css({display : 'none'})
    	$('.find-password-box-two').css({display : 'block'})	
    }
    else{alert('验证码错误')}
    })
//获取验证码的按钮只有在输入正确的手机号码之后才会生效
$('.get-verification-code').click(function(){
	if(phoneText.test($('.phone-number-input').val())){
		
	}
	else{
		alert('请输入正确的手机号')
	}
})
//对象次密码进行比对，让提示语消失
var passwordtext = /^[a-zA-Z0-9]{6,18}$/
var condition1;
var condition2;
$('.new-password-input-box').mouseleave(function(){
	condition1 = $('.new-password-input').val()==$('.new-password-input-again').val()
	condition2 = passwordtext.test($('.new-password-input').val());
	if(condition1 && !condition2){
		$('.two-step-four-layer .reminder').css({display : 'none'})
		alert('请输入至少六位数的密码')
	}
	else if(condition1 && condition2){
		$('.two-step-four-layer .reminder').css({display : 'none'})
	}
	else if (!condition1)
	{
		$('.two-step-four-layer .reminder').css({display : 'block'})
	}
})
//获取两次的密码,进行比对
$('.two-step-five-layer').click(function(){
	
//	两次密码相同,并且满足正则表达式的要求
//	condition1 = $('.new-password-input').val()==$('.new-password-input-again').val()
//	condition2 = passwordtext.test($('.new-password-input').val());
	 if(condition1 && condition2 )
    {
    	$('.find-password-box-two').css({display:'none'})
    	$('.find-password-box-three').css({display:'block'})
    	var seconds = 5
    	var countdowntime = setInterval(function(){
    		
    		$('.three-step-three-layer .countdown').text( seconds  +'s')
    		if(seconds <= 0){
    		clearInterval(countdowntime);
    		window.location.href = 'logon.html'
    		}
    		seconds--
    	},1000)	
    }
})

    