document.getElementById("index").addEventListener("click", function (event) {
	event.preventDefault();

	var username = document.getElementById("username");
	var email = document.getElementById("email");
	var password = document.getElementById("password");
	var confirmpassword = document.getElementById("confirmpassword");
	if (username.value === "" || email.value === "" || password.value === "" || confirmpassword.value === "") {
		alert("fill all the requriments.");
		return;
	}
	window.location.herf = "login.html";

});
