//var phonenumbertext =/^1[345789][0-9]{9}$/
//var phonenumbeival;
////验证手机号的输入是否正确
//$('.phone-number-input').blur(function(){
//	phonenumbeival = $(this).val();
//	phonenumbertext.test(phonenumbeival)? $('.second-layer').css({opacity : 0})   : $('.second-layer').css({opacity : 1})
//})
//
////验证手机号的输入是否正确，用来获取验证码
//$('.get-verification-code').click(function() {
//	phonenumbeival = $('.phone-number-input').val();
//	
//	if(phonenumbertext.test(phonenumbeival)){
//		
//	}
//	else{
//		alert('请输入正确的手机号')
//	}
//})
////验证输入的密码是否符合格式
var passwordtext = /^[0-9a-zA-Z]{6,18}$/;
//
//
//$('.password-input').blur(function(){
//	passwordtext.test($(this).val())? function(){}  : alert('密码输入有误：请输入6到18位的字母或数字') 
//})
//$('.password-input-again').blur(function(){
//	passwordtext.test($(this).val())? function(){}  : alert('密码输入有误：请输入6到18位的字母或数字') 
//})
//
//
//
//
$('.last-layer').click(function(){
	//验证两次输入的密码是否一致
	if($('.password-input-again').val()!=$('.password-input').val()){
		alert('请保证两次密码输入内容一致')
	}
	else if( !passwordtext.test( $('.password-input-again').val()) || !passwordtext.test( $('.password-input-again').val()) )
	{
		alert('密码格式有误：请输入6到18位的字母或数字')
	}
//	验证验证码
//	else if ()
	//检查是否同意洋货码头协议,检查input的伪类：checked是否存在
	else if (!($('.agreen').is(':checked') ) ){
		alert('请观看并同意用户协议')
	}
	else{
		window.location.href = 'logon.html';
	}
})

//使用jquery插件来验证
$.extend($.validator, { 
		messages: {
		required: "这是必填字段",
	    remote: "请修正此字段",
	    email: "请输入有效的电子邮件地址",
	    url: "请输入有效的网址",
	    date: "请输入有效的日期",
	    dateISO: "请输入有效的日期 (YYYY-MM-DD)",
	    number: "请输入有效的数字",
	    digits: "只能输入数字",
	    creditcard: "请输入有效的信用卡号码",
	    equalTo: "你的输入不相同",
	    extension: "请输入有效的后缀",
	    maxlength: $.validator.format("最多可以输入 {0} 个字符"),
	    minlength: $.validator.format("最少要输入 {0} 个字符"),
	    rangelength: $.validator.format("请输入长度在 {0} 到 {1} 之间的字符串"),
	    range: $.validator.format("请输入范围在 {0} 到 {1} 之间的数值"),
	    max: $.validator.format("请输入不大于 {0} 的数值"),
	    min: $.validator.format("请输入不小于 {0} 的数值")
	}, 
	});

$('.validateform').validate({
	rules:{
		password:{
			required:true,
			rangelength:[6,18]
		},
		repassword:{
			required:true,
			rangelength:[6,18],
			equalTo: $('[name = password]'),
		},
		phone:{
			required:true,
			tel:true,
		}
	},
//	自己定义错误的方式
	messages:{
		password:{
			required:'密码不能为空'
		},
		repassword:{
			required:'密码不能为空'
		}
	}
})
//添加其中没有的验证，自定义验证
$.validator.addMethod('tel',function(value,element){
	var telreg = /^1[356789]\d{9}$/
	return telreg.test(value)
	
},'请输入正确的电话号码，且为11位纯数字格式')


//点击获取验证码
//如果cookie已经存在,就自动调用函数
if($.cookie('cookie')){
reducetime($('.get-verification-code'),$.cookie('cookie') )
	
}

$('.get-verification-code').click(function(){
	var countdown = 10;
//	如果已经启用倒计时,点击就直接返回
	if($(this).hasClass('get-code'))
	return;
	reducetime($(this),countdown);
})

	function reducetime(_this,countdown){
		countdown
		_this.addClass('get-code');
		var countdowntime = setInterval(() => {
		var html = countdown + 's后重新获取'
		_this.text(html); 
		$.cookie('cookie',countdown );
		countdown--;
		if(countdown < 0){
			clearInterval(countdowntime)
			_this.removeClass('get-code')
			_this.text('重获验证码');
			countdown = 10;
			$.removeCookie('cookie');
		}
		},1000)
	}
 