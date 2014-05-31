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
