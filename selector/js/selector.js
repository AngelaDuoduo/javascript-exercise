<<<<<<< HEAD
function select(selector_id) {
=======
main();

//主函数，获取页面上所有.selector，依次进行样式设置及事件绑定。
function main() {
>>>>>>> d5bda0513117522965448b29b291f6d5b0a4b06b
	
	var selector = $("#" + selector_id)[0];	
	var newSelector = createSelector(selector);
	selector.parentNode.insertBefore(newSelector, selector);
	addClass(selector, "hide");
	addChooseListenerForSelector(selector, newSelector);
	
}

<<<<<<< HEAD
function createSelector(selector) {
	
	
	var newSelector = document.createElement("div");
	addClass(newSelector, "selector");
=======
//设置.selecor样式
function createSelector(selector, name) {
	
	//隐藏选项列表
	var options = selector.getElementsByTagName("div");
	for (var i = 0; i < options.length; i++) {
		addClass(options[i], "option hide");
	}	
>>>>>>> d5bda0513117522965448b29b291f6d5b0a4b06b
	
	//选择框容器
	var inputContainer = document.createElement("div");
	addClass(inputContainer, "input_container");	
	
<<<<<<< HEAD
		
=======
	//隐藏input, 用于表单提交
	var formData = document.createElement("input");
	formData.setAttribute("type", "hidden");
	if (name) {	
		formData.setAttribute("name",name);
	}	
>>>>>>> d5bda0513117522965448b29b291f6d5b0a4b06b
	
	//选择输入框
	var input = document.createElement("div");	
	addClass(input, "selector_input");		
	
<<<<<<< HEAD
	
	var button = document.createElement("div");
	addClass(button, "sword");
	
=======
	//选择下拉箭头
	var button = document.createElement("div");
	addClass(button, "sword");
	
	//将input, 输入框及箭头加入容器
	inputContainer.appendChild(formData);
>>>>>>> d5bda0513117522965448b29b291f6d5b0a4b06b
	inputContainer.appendChild(input);
	inputContainer.appendChild(button);
	newSelector.appendChild(inputContainer);
	
<<<<<<< HEAD
=======
	//设置列表样式
	buildList(selector);
>>>>>>> d5bda0513117522965448b29b291f6d5b0a4b06b
	
	
	//创建列表框，添加样式，然后隐藏
	var choiceList = document.createElement("div");
	addClass(choiceList, "choice_list hide");
<<<<<<< HEAD
	
	
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

function addChooseListenerForSelector(selector, newSelector) {

	var input = getClassChilds(newSelector, "input_container");
	var target = input[0];
	var list = getClassChilds(newSelector, "choice_list")[0];
=======
	
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
>>>>>>> d5bda0513117522965448b29b291f6d5b0a4b06b
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
		
<<<<<<< HEAD
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
function changeValue(selector, newValue) {
		
	var newSelector = selector.previousSibling;
	var inputContainer = getClassChilds(newSelector, "input_container")[0];	
=======
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
>>>>>>> d5bda0513117522965448b29b291f6d5b0a4b06b
	
	var options = selector.getElementsByTagName("option");
	for (var i = 0; i < options.length; i++) {
			if(options[i].innerText.trim() == newValue) {
				selector.value = newValue;
				getClassChilds(inputContainer, "selector_input")[0].innerText = newValue;
				break;
			}
		}
	

<<<<<<< HEAD
}


=======
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
>>>>>>> d5bda0513117522965448b29b291f6d5b0a4b06b


<<<<<<< HEAD
=======
//将targetClass在elem元素class属性的值中移除
function removeClass(elem, targetClass) {
>>>>>>> d5bda0513117522965448b29b291f6d5b0a4b06b



