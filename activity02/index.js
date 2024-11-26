let current_amt = parseFloat(localStorage.getItem("current_amt")) || 200;

document.getElementById("show_bal").addEventListener(
	"click",

	function () {
		const output = `Current Amount: ${current_amt}`;
		document.getElementById("output").textContent = output;
	}
);

document.getElementById("register").addEventListener(
	"click",

	function () {
		let mobile_number = document.getElementById("mobile_number").value;
		let amount = document.getElementById("amount").value;

		//Display Input Values
		if (amount > current_amt) {
			// stores the current_amt in local storage
			localStorage.setItem("current_amt", current_amt);
			const output = `You don't have a sufficient amount to process this transaction.`;
			document.getElementById("output").textContent = output;
			document.getElementById("pasaload-form").reset();
		} else if (mobile_number && amount && amount <= current_amt) {
			current_amt = current_amt - amount;
			const output_num = `Mobile Number: ${mobile_number}.`;
			document.getElementById("output_num").textContent = output_num;

			const output_amt = `You Loaded: ${amount}.`;
			document.getElementById("output_amt").textContent = output_amt;

			const output_bal = `Your Current Amount is: ${current_amt}.`;
			document.getElementById("output_bal").textContent = output_bal;

			add_pasaload_history(mobile_number, amount, current_amt);
			document.getElementById("pasaload-form").reset();
		} else if (!mobile_number) {
			const output = `Please enter a mobile number.`;
			document.getElementById("output").textContent = output;
			document.getElementById("pasaload-form").reset();
		} else if (!amount) {
			const output = `Please enter an amount.`;
			document.getElementById("output").textContent = output;
			document.getElementById("pasaload-form").reset();
		}
	}
);

function add_pasaload_history(mobile_number, amount, current_amt) {
	const table_body = document
		.getElementById("pasaload_history")
		.querySelector("tbody");
	const date_time = new Date().toLocaleString(); // Get the current date and time

	// Create a new row for the transaction
	const row = document.createElement("tr");
	row.innerHTML = `
        <td>${date_time}</td>
        <td>${mobile_number}</td>
        <td>${amount}</td>
		<td>${current_amt}</td>
    `;

	// Append the row to the table
	table_body.appendChild(row);
}
// } else if (mobile_number && amount) {
// 	const output_num = `Mobile Number: ${mobile_number}.`;
// 	document.getElementById("output_num").textContent = output_num;

// 	const output_amt = `You Loaded: ${amount}.`;
// 	document.getElementById("output_amt").textContent = output_amt;

// 	const output_bal = `Your Current Amount is: ${current_amt}.`;
// 	document.getElementById("output_bal").textContent = output_bal;
// } else if (!mobile_number) {
// 	const output = `Please enter a mobile number.`;
// 	document.getElementById("output").textContent = output;
// } else if (!amount) {
// 	const output = `Please enter an amount.`;
// 	document.getElementById("output").textContent = output;
// }

// Display the input values
