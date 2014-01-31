// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

$(document).ready(function() {

	$('#switcher-default').addClass('selected');
	//三个按钮之中清除按钮selected类, 当前选中按钮添加类工作提取出来作为单独的函数用于使用
	// * 应当把通用处理程序转移到特殊处理程序上方; 再提取removeClass()到通用处理程序之中
	$('#switcher button').on('click', function(){
		$('body').removeClass();
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
	});
	/*
		处理简单事件, 启用页面上的三个按钮
		通过点击页面上不同的按钮, 是的页面呈现不同的样式

		三个按钮能够使用之后, 当前使用的样式需要在按钮上进行体现

		将removeClass()提取到通用处理程序之中后, default按钮的功能selected样式的添加语句可以取消;
	*/
	$('#switcher-narrow').on('click', function() {
		$('body').addClass('narrow');
	});
	$('#switcher-large').on('click', function() {
		$('body').addClass('large');
	});

});