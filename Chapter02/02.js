// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

$(document).ready(function() {
	$('#selected-plays > li').addClass('horizontal');	//''>'子元素组合符. 使得页面之中ul > li部分, 不再纵向排列; 而保持横向排列
	$('#selected-plays li:not(.horizontal)').addClass('sub-level');	//':not()'否定类选择符. 让所有非顶级的li拥有背景色
});