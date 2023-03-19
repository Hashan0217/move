/**
 * 初始化函数，负责创建容器
 */
function init() {}

init();

/**
 * 根据传入的页码、页容量、总记录数，创建分页区域的标签
 * @params page 页码
 * @params limit 页容量
 * @params total 总页数
 */
export function createPagers(page, limit, total) {
	/**
	 * 辅助函数，负责帮忙创建一个页码标签
	 * @params text 标签的文本
	 * @params status 标签的状态，空字符串-普通状态，disabled-禁用状态，active-选中状态
	 */
	function createTag(text, status, targetPage) {}

	//1. 创建首页标签
	//2. 创建上一页标签
	//3. 创建数字页码标签
	//4. 创建下一页标签
	//5. 创建尾页标签
}
