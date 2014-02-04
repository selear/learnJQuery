// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

$(document).ready(function() {
	//为三个按钮添加显示/隐藏的功能
	//更好的用户提前情况是, 鼠标hover该元素时候就进行显示, 鼠标离开的时候就不再进行显示, 因此进行代码改写
	$('#switcher').click(function(event) {
		$('#switcher button').toggleClass('hidden');
	});
});

$(document).ready(function() {
	$('#switcher').click(function(event) {	//在本function之中, this指代的是<div id='switcher'>这个元素
		if($(event.target).is('button')) {
			var bodyClass = event.target.id.split('-')[1];
			$('body').removeClass.addClass(bodyClass);
			$('#switcher button').removeClass('selected');
			$(event.target).addClass('selected');
			event.stopPropagation();
		}
	});
});