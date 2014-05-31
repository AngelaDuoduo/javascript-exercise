//构造时调用的函数
function select(selector_id) {
	
	var selector = $("#" + selector_id)[0];	
	var newSelector = createSelector(selector);
	selector.parentNode.insertBefore(newSelector, selector);
	addClass(selector, "hide");//将原有select元素隐藏
	addChooseListenerForSelector(selector, newSelector);
	
}

//参数为select元素，并根据select的option创建自定义select
function createSelector(selector) {
	
	
	var newSelector = document.createElement("div");
	addClass(newSelector, "selector");
	
	var inputContainer = document.createElement("div");
	addClass(inputContainer, "input_container");	
	
		
	
	var input = document.createElement("div");	
	addClass(input, "selector_input");		
	
	
	var button = document.createElement("div");
	addClass(button, "sword");
	
	inputContainer.appendChild(input);
	inputContainer.appendChild(button);
	newSelector.appendChild(inputContainer);
	
	
	
	var choiceList = document.createElement("div");
	addClass(choiceList, "choice_list hide");
	
	
	var options = selector.getElementsByTagName("option");
	for (var i = 0; i < options.length; i++) {
		var newOption = document.createElement("div");
		newOption.innerText = options[i].innerText;
		addClass(newOption, "option");
		choiceList.appendChild(newOption);
	}	
	
	
	newSelector.appendChild(choiceList);
	
	return newSelector;
	
}

//事件监听与数据同步
function addChooseListenerForSelector(selector, newSelector) {

	var input = getClassChilds(newSelector, "input_container");
	var target = input[0];
	var list = getClassChilds(newSelector, "choice_list")[0];
	var value_show_box = getClassChilds(target, "selector_input")[0];
	var form_input = target.getElementsByTagName("input")[0];
	
	target.addEventListener("click", function(event) {
	
		if (!hasClass(list, "hide")) {
		
			addClass(list, "hide");
		
		} else{
		
			removeClass(list, "hide");	
			addClass(list, "fadeIn");		
		}		
	
	});
	
	list.addEventListener("click", function(event) {
	
		var choice = event.target.innerText;
		value_show_box.innerText = choice;
		
		//同步原select元素的value
		var options = selector.getElementsByTagName("option");
		for (var i = 0; i < options.length; i++) {
			if(options[i].innerText.trim() == choice) {
				options[i].selected = true;
			}
			else {
				options[i].selected = false;
			}
		}
		
		removeClass(list, "fadeIn");
		addClass(list, "hide");
	
	}); 	
}
//改变select的value
function changeValue(selector, newValue) {
		
	var newSelector = selector.previousSibling;
	var inputContainer = getClassChilds(newSelector, "input_container")[0];	
	
	var options = selector.getElementsByTagName("option");
	for (var i = 0; i < options.length; i++) {
			if(options[i].innerText.trim() == newValue) {
				selector.value = newValue;
				getClassChilds(inputContainer, "selector_input")[0].innerText = newValue;
				break;
			}
		}
	

}







