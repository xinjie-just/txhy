/*    
 * Author:lixinjie    Date:2016-04-06    From:wenqing
*/
$(document).ready(function() {
	//日期和时间控件
	$("#startdate").datetimepicker({
			timeFormat: "HH:mm:ss",
			dateFormat: "yy-mm-dd"
	});
	$("#enddate").datetimepicker({
			timeFormat: "HH:mm:ss",
			dateFormat: "yy-mm-dd"
	});
});