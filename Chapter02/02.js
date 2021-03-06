// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

$(document).ready(function() {
	$('#selected-plays > li').addClass('horizontal'); //'>'子元素组合符. 使得页面之中ul > li部分, 不再纵向排列; 而保持横向排列
	$('#selected-plays li:not(.horizontal)').addClass('sub-level'); //':not()'否定类选择符. 让所有非顶级的li拥有背景色

	/*
		使所有电子邮件的连接拥有电子邮件的小图标; 该链接的特点是href属性中其实字符串为'mailto:';
		使所有pdf链接拥有pdf图标; 该链接的href属性中末尾带有.pdf;
		使带有字符串'henry'的链接拥有不同的样式; 该链接的href属性中'http'开头, 任意位置包含henry字符串;
 	 */
	$('a[href^="mailto:"]').addClass('mailto');
	$('a[href$=".pdf"]').addClass('pdflink');
	$('a[href^="http"][href*="henry"]').addClass('henrylink'); //需要特别注意的是, 属性选择器组合使用, 多个方括号之间不能存在空格: 格式应当为'[][]', 而非'[] []'; 后种情况下该代码无法正确生效

	/*
		给表格之中的奇数行添加背景颜色, 使得页面可读性更高
		需要注意的是, 本代码之中:odd, :even, :eq()选择符属于zero-indexed; :nth-child()选择符属于1-indexed
 	 */
	//$('tr:even').addClass('alt');	//如果当前页面含有多个表格, 则在显示上可能会出现不符合显示意图的情况, 可以注释下一行代码, 使用本行代码进行显示
	$('tr:nth-child(odd)').addClass('alt'); //每隔一行为表格添加样式
	//$('td:contains(Henry)').addClass('highlight'); //:contains()选择符区分大小写, 基于上下文内容选择元素
	$('td:contains(Henry)')	//根据complete.js注释了上一行code
		.parent()
		.find('td:eq(1)')
			.addClass('highlight')
		.end()
		.find('td:eq(2)')
			.addClass('highlight');
	/*
		表单元素的选择符, 例如:
		$('input[type="radio"]:checked')
		$('input[type="password"], input[type="text"]:disabled') 
	 */

	/*
	 	为外链添加特殊样式
	 */
	$('a').filter(function() {
		return this.hostname && this.hostname != location.hostname;
	}).addClass('external');

	/*
		访问DOM元素
		var myTag = $('#my-element').get(0).tagName;
		等价于
		var myTag = $('#my-element')[0].tagName;
 	*/

	/*
		第二章练习
	*/
	// 1.给位于嵌套列表第二层次的所有<li>元素添加special类
	$('ul>li>ul>li').addClass('special');

	// 2.给位于表格第三列的所有单元格添加year类
	$('tr').find('td:eq(2)').addClass('year');

	// 3.为表格中包含文本'Tragedy'的第一行添加special类
	$('td:contains(Tragedy):eq(0)').addClass('special');

	// *4.选择包含链接(<a>)的所有列表项(<li>), 为每个选中的列表项的同辈列表元素添加afterlink类
	$('li>a').parent().parent().children().addClass('afterlink');
	//$('li').find('a').parent().parent().children().addClass('afterlink');

	// 5.为与.pdf链接最接近的祖先元素<ul>添加tragedy类
	$('a[href$=".pdf"]').parent().parent().addClass('tragedy');
});