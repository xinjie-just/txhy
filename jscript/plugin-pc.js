// JavaScript Document
$(document).ready(function() {
	//注册页input失去焦点和获得焦点统一样式
	$("form input").focus(function() {
		$(this).css("border-color","#f44");
	});
	$("form input").blur(function() {
		$(this).css("border-color","#999");
	});

	//协议
	$("#protocol-select").click(function() {
		if($(this).hasClass("protocol-unselected")){
			$(this).removeClass("protocol-unselected");
			$(this).addClass("protocol-selected");
		}
		else if($(this).hasClass("protocol-selected")){
			$(this).removeClass("protocol-selected");
			$(this).addClass("protocol-unselected");
		}
	});

	//让不支持placeholder属性的ie6-ie9也支持
	$('input, textarea').placeholder();

	//绑定账号页面切换显示
	$("#select-bound-phone").click(function() {
	$("#bound-phone-box").css("display","block");
		$("#bound-tx-box").css("display","none");
	});
	$("#slect-bound-tx").click(function() {
		$("#bound-phone-box").css("display","none");
	$("#bound-tx-box").css("display","block");
	});

	
});
//注册表单验证
function regCheck(){
	var reg = /^(13|15|18|17)\d{9}$/;
	var phone = document.getElementById("phone").value;
	var piccode = document.getElementById("piccode").value;
	var sms = document.getElementById("sms").value;
	var password1 = document.getElementById("pwd").value;
	var password2 = document.getElementById("pwd-again").value;
	if(phone!=null&&phone!=''&&!(reg.test(phone))){ 
		alert("手机号码有误，请重填!");  
		return false; 
	} 
	if(piccode.length!=4){
		alert("图片验证码位数不对");
		return false; 
	}
	if(sms.length!=4){
		alert("短信验证码位数不对");
		return false; 
	}
	if(password1.length<6){
		alert("密码位数不能小于6");
		return false; 
	}
	if(password1!=password2){
		alert("两次输入的密码不同");
		return false; 
	}
	if($("#protocol-select").hasClass("protocol-unselected")){
		alert("您没有同意同乡好友服务协议!同意后才能提交，请选中！"	);
		return false;
	}
}
//登录表单验证
function loginCheck(){
	var str = /^(13|15|18|17)\d{9}$/;
	var phone = document.getElementById("phone").value;
	if(phone!=null&&phone!=''&&!(str.test(phone))){ 
		alert("手机号码有误，请重填!");  
		return false; 
	}
	var password = document.getElementById("password").value;
	if(password.length<6){
		alert("密码位数不能小于6");
		return false; 
	}
}
//绑定账号切换单选按钮
window.onbeforeunload = function() {
	if (event.clientX > 0 || event.clientY >= 0) {
		$("#bound-phone").attr("checked","true");
		$("#bound-tx").attr("checked","false");
	}
};























