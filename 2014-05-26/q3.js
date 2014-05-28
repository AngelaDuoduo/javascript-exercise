//这题我不太明白啊是这个意思吗，也木有测试。
function router() {
	var url = location.href;
	var action = url.split("#");
	if (action.length == 2) {
		var items = action[1].split("/");
		var func = items[0];
		func.apply(this, items.slice(1, items.length));
	}	
}
