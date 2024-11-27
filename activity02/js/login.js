let global_password =
	localStorage.getItem("password") &&
	!isNaN(parseFloat(localStorage.getItem("password")))
		? parseFloat(localStorage.getItem("password"))
		: "sscgi";

document.getElementById("login").addEventListener(
	"click",

	function () {
		let username = document.getElementById("username").value;
		let password = document.getElementById("password").value;

		if (username === "admin" && password === global_password) {
			window.location.href = "pasaload.html";
		} else {
			// Show an error message if the credentials are incorrect
			alert("Invalid username or password. Please try again.");
		}
	}
);
