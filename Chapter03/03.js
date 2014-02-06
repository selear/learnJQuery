// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

$(document).ready(function() { //鼠标移动到'#switcher'上面之后, 提高交互性, 表示当前选中的元素
	$('#switcher').hover(function() {
		$(this).addClass('hover');
	}, function() {
		$(this).removeClass('hover');
	});
});

$(document).ready(function() { //为点击按钮添加功能, 是的点击按钮之后能够切换样式
	$('#switcher-default').addClass('selected');
	$('#switcher').click(function(event) {
		if ($(event.target).is('button')) {
			var bodyClass = event.target.id.split('-')[1];
			$('body').removeClass().addClass(bodyClass);
			$('#switcher button').removeClass('selected');
			$(event.target).addClass('selected');
		} else {
			$('#switcher button').toggleClass('hidden');
		}
	});

	//希望页面样在样式narrow和large的情况下, 点击#switcher不进行按钮的隐藏, 使用.off()方法
	$('#switcher-narrow, #switcher-large').click(function() {
		$('#switcher').off('click');
	});
	
});