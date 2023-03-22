import { createMovieTags } from "./list";
import { getMove } from "../api/index";
import { async } from "regenerator-runtime";
import { createPagers } from "./pager";
// console.log("movie");
async function init() {
	const res = await getMove(1, 30);
	createMovieTags(res.data.movieList);
	createPagers(1, 30, res.data.movieTotal);
}
init();
