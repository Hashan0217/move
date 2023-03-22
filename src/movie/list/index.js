import style from "./index.module.less";
import $ from "jquery";
/**
 * 初始化函数，负责创建容器
 */
let div;
function init() {
	div = $("<div>").addClass(style.container).appendTo("#app");
}

init();

/**
 * 根据传入的电影数组，创建元素，填充到容器中
 * @params movies 电影数组
 */
export function createMovieTags(movies) {
	const res = movies
		.map(
			(item) => `
    <div>
        <a href="${item.url}"><img src=${item.cover}></a>
        <p class="${style.title}">${item.title}</p>
        <p class="${style.rate}">评分${item.rate}</p>
    </div>`
		)
		.join("");
	div.html(res);
}
