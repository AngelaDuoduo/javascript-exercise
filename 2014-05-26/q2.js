function clone(a) {
	var b;
	if (typeof a == 'object') {
		b = new a.constructor();
		
		for (key in a) {
			if (typeof (a[key]) == 'object') {
				b[key] = clone(a[key]);
			} else {
				b[key] = a[key];
			}
		}
	} else {
		b = a;
	}
	return b;
}