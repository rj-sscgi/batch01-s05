let global_password =
	localStorage.getItem("password") &&
	!isNaN(parseFloat(localStorage.getItem("password")))
		? parseFloat(localStorage.getItem("password"))
		: "sscgi";

document.getElementById("re-load").addEventListener(
	"click",

	function () {
		let reload = document.getElementById("reload").value;
		let password = document.getElementById("password").value;

		reload = parseFloat(reload);

		// Invalid Amount
		if (reload > 9999 || reload === 0 || reload === NaN || reload === null) {
			alert(`You can't buy load with that amount.`);
		}

		// Actual Reloading
		else if (password === global_password) {
			current_amt = current_amt + reload;

			// stores the current_amt in local storage
			localStorage.setItem("current_amt", current_amt);

			const output_txt = `You Loaded: ${reload}`;
			document.getElementById("output-rel").textContent = output_txt;
			const output_bal = `Your Balance is: ${current_amt}`;
			document.getElementById("output-bal").textContent = output_bal;
			document.getElementById("loading-form").reset();
		}

		// Invalid Password
		else if (password !== global_password) {
			alert(`You Entered an Invalid Password.`);
			document.getElementById("loading-form").reset();
		}
	}
);
