const passwordBox = document.getElementById("pass");
const confirmPasswordBox = document.getElementById("cpass");
const errorText = document.querySelector(".error");
const submitBtn = document.getElementById("submit-btn");

passwordBox.addEventListener("keyup", () => checkPass());
confirmPasswordBox.addEventListener("keyup", () => checkPass());

function checkPass() {
	if (passwordBox.value != confirmPasswordBox.value) {
		errorText.textContent = "* Password do not match";
    submitBtn.disabled = true
	} else {
    errorText.textContent = ""
    submitBtn.disabled = false
  }
}
checkPass()