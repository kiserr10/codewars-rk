function alphabetPosition(text) {
	var result = "";
	for (var i = 0; i < text.length; i++) {
		var letterCode = text.toUpperCase().charCodeAt(i);
		if (letterCode > 64 && letterCode < 91) result += (letterCode - 64) + " ";
	}
	return result.slice(0, result.length - 1);
}
