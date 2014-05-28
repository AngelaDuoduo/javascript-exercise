main();

//主函数，获取页面上所有.selector，依次进行样式设置及事件绑定。
function main() {
	
	var selectors = $(".selector");
	for (var index in selectors) {
		var name = selectors[index].getAttribute("name");
		createSelector(selectors[index], name);
		addChooseListenerForSelector(selectors[index]);
		//addSearchListenerForSelector(selector[index]);
	}
	
}

//设置.selecor样式
function createSelector(selector, name) {
	
	//隐藏选项列表
	var options = selector.getElementsByTagName("div");
	for (var i = 0; i < options.length; i++) {
		addClass(options[i], "option hide");
	}	
	
	//选择框容器
	var inputContainer = document.createElement("div");
	addClass(inputContainer, "input_container");	
	
	//隐藏input, 用于表单提交
	var formData = document.createElement("input");
	formData.setAttribute("type", "hidden");
	if (name) {	
		formData.setAttribute("name",name);
	}	
	
	//选择输入框
	var input = document.createElement("div");	
	addClass(input, "selector_input");		
	
	//选择下拉箭头
	var button = document.createElement("div");
	addClass(button, "sword");
	
	//将input, 输入框及箭头加入容器
	inputContainer.appendChild(formData);
	inputContainer.appendChild(input);
	inputContainer.appendChild(button);
	selector.insertBefore(inputContainer, selector.firstChild);
	
	//设置列表样式
	buildList(selector);
	
}

function buildList(selector, options) {
	
	//创建列表框，添加样式，然后隐藏
	var choiceList = document.createElement("div");
	addClass(choiceList, "choice_list hide");
	
	//获取selector下所有选项<div>元素
	var options = getClassChilds(selector, "option");
	var len = options.length;
	
	//将选项元素加入列表框，移除hide类，只保留列表框隐藏
	for (var i = 0; i < len; i++) {
		choiceList.appendChild(options[i]);
		removeClass(options[i], "hide");
		
	}
	
	//将列表框加入selector末尾
	selector.appendChild(choiceList);
}

//设置selector被点击时的操作
function addChooseListenerForSelector(selector) {

	//得到选择框容器
	var input = getClassChilds(selector, "input_container");
	var target = input[0];
	
	//得到选择列表
	var list = getClassChilds(selector, "choice_list")[0];
	
	//得到选择输入框
	var value_show_box = getClassChilds(target, "selector_input")[0];
	
	//得到隐藏的input元素
	var form_input = target.getElementsByTagName("input")[0];
	
	//为选择框容器click事件绑定操作，点击选择输入框或箭头均有效。先点击显示，后点击隐藏。
	target.addEventListener("click", function(event) {
	
		if (!hasClass(list, "hide")) {
		
			addClass(list, "hide");
		
		} else{
		
			removeClass(list, "hide");	
			addClass(list, "fadeIn");		
		}		
	
	});
	
	//为列表框click事件绑定操作
	list.addEventListener("click", function(event) {
	
		//获得选项内容，并令其显示在选择输入框中。
		var choice = event.target.innerText;
		value_show_box.innerText = choice;
		
		//设置input元素value属性
		form_input.setAttribute("value", choice);
		
		//隐藏列表
		removeClass(list, "fadeIn");
		addClass(list, "hide");
	
	}); 
}




//id及class选择器
function $(selector) {
	var elems = new Array();
	if (/^#/.test(selector)) {
		var id = selector.substring(1);
		var element = document.getElementById(id);
		elems.push(element);
	} else if (/^\./.test(selector)) {

		var classes = selector.split(".");
		classSet = classes.slice(1, classes.length);
		var allElements = document.body.getElementsByTagName("*");		
		for (var i = 0; i < allElements.length; i++) {
		   if(hasClassSet(allElements[i], classSet)) {
				elems.push(allElements[i]);
		   }
	    }
	}

	return elems;
}

//得到elem元素下class属性中包含值className的子元素数组
function getClassChilds(elem, className) {

	var childs = elem.childNodes;
	var len = childs.length;
	var classChilds = new Array();
	
	for (var i = 0; i < len; i++) {
	
		if (childs[i].nodeType == 1 && hasClass(childs[i], className)) {
			classChilds.push(childs[i]);
		}
	
	}
	
	return classChilds;
}

//判断elem元素的class属性的值是否包含oneClass值
function hasClass(elem, oneClass) {
	if(!elem.hasAttribute("class")) return false;
	var className = " " + elem.getAttribute("class") + " ";
	oneClass = " " + oneClass + " ";
    return className.indexOf(oneClass) != -1;	
}


//判断elem元素的class属性的值是否包含classSet中所有值
function hasClassSet(elem, classSet) {

	if(!elem.hasAttribute("class")) return false;
	var className = " " + elem.getAttribute("class") + " ";
	var oneClass;
	for (var i = 0; i< classSet.length; i++) {
		oneClass = " " + classSet[i] + " ";
		if (className.indexOf(oneClass) == -1 ) {
			return false;
		}
	}

	return true;

}

//为elem元素class属性添加值newClass
function addClass(elem, newClass) {
	var className;
	if (elem.hasAttribute("class")) {
		var classSet = newClass.split(" ");
		for (var oneClass in classSet) {
			if (!hasClass(elem, classSet[oneClass])) {
			className = elem.getAttribute("class") + " " + classSet[oneClass];
			elem.setAttribute("class", className);
		  }
		}

	} else {
		elem.setAttribute("class", newClass);
	}
}

//将targetClass在elem元素class属性的值中移除
function removeClass(elem, targetClass) {

	if(elem.hasAttribute("class")) {
		var classArray = elem.getAttribute("class").split(" ");
		var targetClassArray = targetClass.split(" ");
		var targetPosition = new Array();

		for (var i = 0; i < targetClassArray.length; i++) {
			for (var j = 0; j < classArray.length; j++) {
				if (targetClassArray[i] == classArray[j]) {
					classArray[j] = " ";
				}
			}
		}

		var className = classArray.join(" ").replace(/\s+/g, " ").trim();	
		if (className == "") {
			elem.removeAttribute("class");
		} else {
			elem.setAttribute("class", className);
		}
	}
}
