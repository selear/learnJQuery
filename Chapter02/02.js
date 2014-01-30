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

$(document).ready(function() {
	$('a[href^="mailto:"]').addClass('mailto');	//使得所有具有电子邮件形式的链接拥有电子邮件的小图标; 该链接的特点是起始字符串为mailto:
	$('a[href$=".pdf"]').addClass('pdflink');	//所有拥有.pdf的链接拥有pdf图标; 链接之中以.pdf结尾
	$('a[href^="http"][href*="henry"]').addClass('henrylink');	//属性选择符的组合使用, 选择http开头, 任意位置包含henry的所有链接; 需要特别注意的是, 组合使用, 多个方括号之间不能存在空格: 格式应当为'[][]', 而非'[] []'; 后种情况下该代码无法正确生效
});