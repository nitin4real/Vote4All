
function isValid_Mobile_Number(mobile_number) {
	let regex = new RegExp(/(0|91)?[6-9][0-9]{9}/);

	if (mobile_number == null) {
		return false;
	}

	if (regex.test(mobile_number) == true) {
		return true;
	}
	else {
		return false;
	}
}
module.exports = isValid_Mobile_Number