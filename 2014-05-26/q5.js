function hasClass(elem, oneClass) {
	if(!elem.hasAttribute("class")) return false;
	var className = " " + elem.getAttribute("class") + " ";
	oneClass = " " + oneClass + " ";
    return className.indexOf(oneClass) != -1;	
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

