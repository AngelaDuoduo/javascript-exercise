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