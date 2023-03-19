import { getMove } from "../api/index";
import "./list/index";
import "./pager/index";
getMove(1, 10).then((res) => {
	console.log(res);
});
