// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

$(document).ready(function() {
	/*
		处理简单事件, 启用页面上的三个按钮
		通过点击页面上不同的按钮, 是的页面呈现不同的样式

		三个按钮能够使用之后, 当前使用的样式需要在按钮上进行体现
	*/
	$('#switcher-default').addClass('selected').on('click', function() { //在页面出现之后, 表示该状态已经被选中; 点击之后, 先清除所有selected的样式, 再给选中的按钮添加selected类
		$('body').removeClass();
	});
	$('#switcher-narrow').on('click', function() {
		$('body').removeClass().addClass('narrow');
	});
	$('#switcher-large').on('click', function() {
		$('body').removeClass().addClass('large');
	});

	//三个按钮之中清除按钮selected类, 当前选中按钮添加类工作提取出来作为单独的函数用于使用
	$('#switcher button').on('click', function(){
		$('#switcher button').removeClass('selected');
		$(this).addClass('selected');
	});
});