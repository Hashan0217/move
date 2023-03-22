import style from "./index.module.less";
import $ from "jquery";
import { getMove } from "../../api/index";
import { async } from "regenerator-runtime";
import { createMovieTags } from "../list";
/**
 * 初始化函数，负责创建容器
 */
let div;
function init() {
	div = $("<div>").addClass(style.container).appendTo("#app");
}

init();

/**
 * 根据传入的页码、页容量、总记录数，创建分页区域的标签
 * @params page 页码
 * @params limit 页容量
 * @params total 总页数
 */
export function createPagers(page, limit, total) {
	let maxNum = Math.ceil(total / limit);
	div.empty();
	/**
	 * 辅助函数，负责帮忙创建一个页码标签
	 * @params text 标签的文本
	 * @params status 标签的状态，空字符串-普通状态，disabled-禁用状态，active-选中状态
	 */
	function createTag(text, status, targetPage) {
		const span = $("<span>").text(text).addClass(style.span).appendTo(div);
		const ClassValue = style[status];
		span.addClass(ClassValue);
		if (status == "") {
			span.on("click", async function (e) {
				//1.重新拿数据
				const res = await getMove(targetPage, limit);
				//2.重新生成列表
				createMovieTags(res.data.movieList);
				//3.重新成分页区
				createPagers(targetPage, limit, res.data.movieTotal);
			});
		}
	}

	//1. 创建首页标签
	createTag("|<<", page === 1 ? "prohibit" : "", 1);
	//2. 创建上一页标签
	createTag("<<", page === 1 ? "prohibit" : "", page - 1);
	//3. 创建数字页码标签
	const max = 10;
	let minPage = Math.floor(page - max / 2);
	minPage < 1 && (minPage = 1);
	let maxPage = minPage + max - 1;
	maxPage >= maxNum && (maxPage = maxNum);
	for (let index = minPage; index <= maxPage; index++) {
		createTag(index, index === page ? "active" : "", index);
	}
	//4. 创建下一页标签
	createTag(">>", page === maxNum ? "prohibit" : "", page + 1);
	//5. 创建尾页标签
	createTag(">>|", page === maxNum ? "prohibit" : "", maxNum);
}
