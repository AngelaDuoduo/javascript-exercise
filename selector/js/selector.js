main();

function main() {
	
	var selectors = $(".selector");
	for (var index in selectors) {
		var name = selectors[index].getAttribute("name");
		createSelector(selectors[index], name);
		addChooseListenerForSelector(selectors[index]);
		//addSearchListenerForSelector(selector[index]);
	}
	
}

function createSelector(selector, name) {
	
	var options = selector.getElementsByTagName("div");
	for (var i = 0; i < options.length; i++) {
		addClass(options[i], "option hide");
	}	
	
	var inputContainer = document.createElement("div");
	addClass(inputContainer, "input_container");	
	
	var formData = document.createElement("input");
	formData.setAttribute("type", "hidden");
	if (name) {	
		formData.setAttribute("name",name);
	}	
	
	var input = document.createElement("div");	
	addClass(input, "selector_input");		
	
	var button = document.createElement("div");
	addClass(button, "sword");
	
	inputContainer.appendChild(formData);
	inputContainer.appendChild(input);
	inputContainer.appendChild(button);
	selector.insertBefore(inputContainer, selector.firstChild);
	
	buildList(selector);
	
}

function buildList(selector, options) {
	
	var choiceList = document.createElement("div");
	addClass(choiceList, "choice_list hide");
	var options = getClassChilds(selector, "option");
	var len = options.length;
	
	for (var i = 0; i < len; i++) {
		choiceList.appendChild(options[i]);
		removeClass(options[i], "hide");
		
	}		
	selector.appendChild(choiceList);
}

function addChooseListenerForSelector(selector) {

	var input = getClassChilds(selector, "input_container");
	var target = input[0];
	var list = getClassChilds(selector, "choice_list")[0];
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
		form_input.setAttribute("value", choice);
		removeClass(list, "fadeIn");
		addClass(list, "hide");
	
	}); 
}





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

function hasClass(elem, oneClass) {
	if(!elem.hasAttribute("class")) return false;
	var className = " " + elem.getAttribute("class") + " ";
	oneClass = " " + oneClass + " ";
    return className.indexOf(oneClass) != -1;	
}

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
