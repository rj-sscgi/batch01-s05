document.getElementById("re-load").addEventListener(
	"click",

	function () {
		let reload = document.getElementById("reload").value;
		let password = document.getElementById("password").value;

		reload = parseFloat(reload);

		if (password === "sscgi") {
			current_amt = current_amt + reload;

			// stores the current_amt in local storage
			localStorage.setItem("current_amt", current_amt);

			const output_txt = `You Loaded: ${reload}`;
			document.getElementById("output-rel").textContent = output_txt;
			const output_bal = `Your Balance is: ${current_amt}`;
			document.getElementById("output-bal").textContent = output_bal;
			document.getElementById("loading-form").reset();
		} else if (password !== "sscgi") {
			const output_txt = `You Entered an Invalid Password.`;
			document.getElementById("output-rel").textContent = output_txt;
			document.getElementById("loading-form").reset();
		}
	}
);
