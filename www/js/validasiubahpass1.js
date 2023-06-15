
var newpass = document.forms['form']['newpass'];
var newpass1 = document.forms['form']['newpass1'];

var pass_error = document.getElementById('pass_error');
var pass1_error = document.getElementById('pass1_error');

newpass.addEventListener('textInput', newpass_Verify);
newpass1.addEventListener('textInput', newpass1_Verify);

function validated(){
	if (newpass.value.length < 9) {
		newpass.style.border = "1px solid red";
		pass_error.style.display = "block";
		newpass.focus();
		return false;
	}
	if (newpass1.value.length < 6) {
		newpass1.style.border = "1px solid red";
		pass1_error.style.display = "block";
		newpass1.focus();
		return false;
	}

}
function newpass_Verify(){
	if (newpass.value.length >= 8) {
		newpass.style.border = "1px solid silver";
		pass_error.style.display = "none";
		return true;
	}
}
function newpass1_Verify(){
	if (newpass1.value.length >= 5) {
		newpass1.style.border = "1px solid silver";
		pass1_error.style.display = "none";
		return true;
	}
}
