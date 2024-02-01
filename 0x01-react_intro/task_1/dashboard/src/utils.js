export function getFullYear() {
	var today = new Date(); 
	var date = today.getFullYear()
	return date;
}


export function getFooterCopy(isIndex) {
		if (isIndex === true) {
			return("Holberton school")
		}
		else {
			return("Holberton School main dashboard");
		}
	}
