document.getElementById("signin").addEventListener("click", function (event) {
	event.preventDefault();

	var email = document.getElementById("email");
	var password = document.getElementById("password");
	if (email.value === "" || password.value === "") {
		alert("fill all the requriments.");
		return;
	}
	window.location.herf = "register.html";

});
