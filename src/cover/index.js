import $ from "jquery";
import styles from "./index.module.less";
import videoUrl from "../assets/movie.mp4";
import audioUrl from "../assets/music.mp3";
function init() {
	/**
	 * 初始化页面
	 */
	const container = $("<div>").addClass(styles.container).appendTo("#app");
	const video = $("<video>")
		.prop("autoplay", true)
		.prop("loop", true)
		.prop("src", videoUrl)
		.addClass(styles.viedoStyle)
		.appendTo(container);

	const audio = $("<audio>")
		.prop("autoplay", true)
		.prop("loop", true)
		.prop("src", audioUrl)
		.addClass(styles.audioStyle)
		.appendTo(container);

	$("<h1>").text("豆瓣电影").addClass(styles.text).appendTo(container);
	/**
	 * 滑动事件
	 * 滑动超过视口，视频和音频暂停和播放
	 */
	$(window).on("scroll", function () {
		const scrollTop = document.documentElement.scrollTop;
		const vHeight = document.documentElement.clientHeight;
		const target = scrollTop >= vHeight;
		if (target) {
			video[0].pause();
			audio[0].pause();
		} else {
			video[0].play();
			audio[0].play();
		}
	});
}

init();
