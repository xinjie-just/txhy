/*    
 * Author:lixinjie    Date:2016-04-06    From:wenqing
*/
$(document).ready(function() {

	//给返回按钮添加返回事件(回到上一界面)
	$(".icon-fanhui").bind("click",function(){
		window.history.go(-1);
    });

    // 对于标题，限制宽度，超出一定字数后减小 font-size
    var h1Len = $("header nav h1").text().length;
    if (h1Len > 6) {
    	 $("header nav h1").css("fontSize", "1.6rem");
    }
    if (h1Len > 12) {
    	 $("header nav h1").css("fontSize", "1.5rem");
    }    
    if (h1Len > 18) {
    	 $("header nav h1").css("fontSize", "1.4rem");
    }

	//活动页文本输入获得焦点和失去焦点统一样式
	$("#activityDetail").focus(function(){
		$(this).css("border","1px solid #fe5454");
	});
	$("#activityDetail").blur(function(){
		$(this).css("border","1px solid #8e8e8e");
	});

	//活动页input获得焦点和失去焦点统一样式
	$(".activity-main form .activity-input input[type='text']").focus(function(){
		$(this).css("background-color","#eaeaea");	
	});
	$(".activity-main form .activity-input input[type='text']").blur(function(){
		$(this).css("background-color","#fafafa");	
	});

	//活动页添加图片
	$("#activity-detail-btn").click(function(){
		$("#activity-detail-img").slideToggle(100);
	});

	//活动页面弹出搜索框
    $("#search").click(function(){
		$(this).parents(".search").children("form").slideToggle(100);
	});

	//修改密码input框获得焦点和失去焦点统一样式
	$("#passwd-form input").focus(function() {
	    $(this).css("backgorund-color","#eaeaea");
	});	
	$("#passwd-form input").blur(function() {
	    $(this).css("backgorund-color","#fafafa");
	});	

	//更多资料展开与收起
	$("#toggleBtn").click(function(){		
		$(this).parent().find("#columnMore").slideToggle(200);
		if($(this).children("span").html()=="展开更多资料"){
			$(this).children("span").html("收起更多资料");
			$(this).children("b").html("&uarr;");
		}
		else{
			$(this).children("span").html("展开更多资料");
			$(this).children("b").html("&darr;");
		}
	});

	//所有红娘
	$("#clearSearch").click(function(){
		$("#matchmakerKey").val("");
	});
	$("#rank").click(function(){
		if ($("#triangular").hasClass("bottom")) {
			$("#triangular").removeClass("bottom");
			$("#triangular").addClass("top");
		}
		else {
			$("#triangular").removeClass("top");
			$("#triangular").addClass("bottom");
		}
		$("#rankList").toggle(200);
	});

	//我的红娘
	$("#infoNav a").click(function(){
		$(this).addClass("active");
		$(this).siblings("a").removeClass("active");
		if ($(this).attr("id")=="matchmakerInfoNav") {
			$("#matchmakerInfo").addClass("active");
			$("#matchmakerInfo").siblings("ul").removeClass("active");
		}
		else {
			$("#leaveMessages").addClass("active");
			$("#leaveMessages").siblings("ul").removeClass("active");
		}
	});
	$("#showClose").click(function() {
		$("#companyDetails").slideToggle(400);
		if ($.trim($(this).text()) == "展开") {
			$(this).text("收起");
		}
		else{
			$(this).text("展开");
		}
	});

	//我的活动详情页面更多回复内容展开与收起
	$("#more-btn").click(function(){		
		$(this).parent().find("#review-hide").slideToggle(200);
		if($(this).children("span").html()=="展开更多回复内容"){
			$(this).children("span").html("收起更多回复内容");
			$(this).children("b").html("&uarr;");
			$(this).attr("title","收起更多回复内容");
		}
		else{
			$(this).children("span").html("展开更多回复内容");
			$(this).children("b").html("&darr;");
			$(this).attr("title","展开查看更多");
		}
	});

	// 活动列表页当没有数据时，不显示上一页、下一页，显示“没有数据文本”
	if ($(".activity-list ul").find("li").length == 0) {
		$(".activity-list ul").text("没有数据").css({
			fontSize: "14px",
			textAlign: "center",
			paddingTop: "1.5rem",
			paddingBottom: "1.5rem"
		});
		$(".pagination").css("display", "none");
	}

	//我的活详情页面活动剪影列表的图片，让高度与宽度相等
	$(".silhouette-img-list li").height($(".silhouette-img-list li").width());
	$(".silhouette-img-list").find("img").height($(".silhouette-img-list li").height());
	$(".silhouette-img-list").find("img").width($(".silhouette-img-list li").width());
	//我的活动页面(活动分类)tab
	$("#tabNav1").click(function(){
		$(this).addClass("active");
		$(this).parent("li").siblings("li").children("a").removeClass("active");
		$("#content1").addClass("active");
		$("#content1").siblings("ul").removeClass("active");
	});
	$("#tabNav2").click(function(){
		$(this).addClass("active");
		$(this).parent("li").siblings("li").children("a").removeClass("active");
		$("#content2").addClass("active");
		$("#content2").siblings("ul").removeClass("active");
	});
	$("#tabNav3").click(function(){
		$(this).addClass("active");
		$(this).parent("li").siblings("li").children("a").removeClass("active");
		$("#content3").addClass("active");
		$("#content3").siblings("ul").removeClass("active");
	});

	//我的相册照片的高设置成和宽一样的尺寸
   	$(".my-album-img-list").children("li").height($(".my-album-img-list").children("li").width());
	$(".my-album-img-list").find("img").width($(".my-album-img-list").children("li").width());
	$(".my-album-img-list").find("img").height($(".my-album-img-list").find("img").width());

	//我的图片详情图片的高设置成和宽一样的尺寸
    $(".my-album-details").children("li").height($(".my-album-details").children("li").width());
	$(".my-album-details").find("img").width($(".my-album-details").children("li").width());
	$(".my-album-details").find("img").height($(".my-album-details").find("img").width());	

	//发布活动剪影图片的高设置成和宽一样的尺寸
   	$("#sketches-img-list").children("li").height($("#sketches-img-list").children("li").width());
	$("#sketches-img-list").find("img").width($("#sketches-img-list").children("li").width());
	$("#sketches-img-list").find("img").height($("#sketches-img-list").find("img").width());
	$("#add-sketches").height($("#add-sketches").width());

	//活动九宫格展示的图片的宽高比为4:3
	var ninePatchWidth = $(".activity-nine-patch").children("li").width();
	var ninePatchWidth2 = ninePatchWidth / 4;
	var ninePatchWidth3 = ninePatchWidth2 * 3;
	var ninePatchWidth4 = parseFloat("ninePatchWidth3");
	$(".activity-nine-patch").children("li").height(ninePatchWidth4);
	$(".activity-nine-patch").find("img").width($(".activity-nine-patch").children("li").width());
	$(".activity-nine-patch").find("img").height($(".activity-nine-patch").children("li").height());

	//分享的显示和隐藏
	$(".icon-share").click(function() {
    	$(".bdsharebuttonbox").toggle(200);
  	});

	//婚恋页面单身用户列表的头像，高等于宽
	$(".singer-list li a img").height($(".singer-list li a img").width());

	//婚恋页面推荐活动，对于报名人数大于99人的显示为99+
	if($.trim($("#activityRecommendBottom span").text())>99) {
		$("#activityRecommendBottom span").text("99+");
	}
	
	//婚恋页面点击更多的展开和显示
	$(".marriage-type .more").click(function() {
		$(".marriage-type .more-list").slideToggle();
	});

	// 下载APP时提供选择APP下载途径
	$("#downloadApp").click(function() {
		$("#resource").slideToggle("slow");
	});
});
//注册页面手机号码验证
function checkForm(){ 
	var phonenum = document.getElementById("phonenum").value;
	var password = document.getElementById("password").value;
	var reg = /^1[0-9]{10}$/;
	if(trim(phonenum).length==0){
		alert("手机号码不能为空！！！");
		return false; 
	}
	if(trim(password).length==0){
		alert("密码不能为空！！！");
		return false; 
	}
	if(!(reg.test(phonenum))){ 
			alert("手机号码有误，请重填");  
			return false; 
	} 
}
//注册表单验证
function regCheck(){
	var reg = /^(13|14|15|18|17)\d{9}$/;
	var phone = document.getElementById("phone").value;
	if(!(reg.test(phone))){ 
		alert("手机号码有误，请重填");  
		return false; 
	} 
	var piccode = document.getElementById("piccode").value;
	if(piccode.length!=4){
		alert("图片验证码位数不对");
		return false; 
	}
	var sms = document.getElementById("sms").value;
	if(sms.length!=4){
		alert("短信验证码位数不对");
		return false; 
	}
	var password1 = document.getElementById("password1").value;
	var password2 = document.getElementById("password2").value;
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