// 11. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.

var cleanThisNumber = prompt('What is your phone number?');
console.log('test');
phoneNumberCleanUp(cleanThisNumber);

function phoneNumberCleanUp(phoneNumber1) {
	var phoneNumber = phoneNumber1.replace(/-/g,"");
	console.log (phoneNumber.length);
	console.log(phoneNumber);
	if ((phoneNumber.length < 10) || (phoneNumber.length > 11) || (((phoneNumber.length === 11) && (phoneNumber.charAt(0) !== '1')))) {
		console.log ("This is a bad number")
	} else if ((phoneNumber.length === 11) && (phoneNumber.charAt(0) === '1')) { phoneNumber = phoneNumber.slice(1);
		console.log (phoneNumber);

	}
	else return phoneNumber;
}
