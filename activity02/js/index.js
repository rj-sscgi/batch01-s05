let current_amt = parseFloat(localStorage.getItem("current_amt")) ?? 200;

if (isNaN(current_amt)) {
	current_amt = 200;
}

// // Check balance
// document.getElementById("show_bal").addEventListener(
// 	"mouseleave",

// 	function () {
// 		const output_1 = ``;
// 		document.getElementById("output_1").textContent = output_1;
// 		const output_2 = ``;
// 		document.getElementById("output_2").textContent = output_2;
// 		const output_3 = ``;
// 		document.getElementById("output_3").textContent = output_3;
// 	}
// );

// // Check balance
// document.getElementById("show_bal").addEventListener(
// 	"mouseover",

// 	function () {
// 		const output_1 = `Current Amount: ${current_amt}`;
// 		document.getElementById("output_1").textContent = output_1;

// 		const output_2 = ``;
// 		document.getElementById("output_2").textContent = output_2;
// 		const output_3 = ``;
// 		document.getElementById("output_3").textContent = output_3;
// 	}
// );

document.getElementById("register").addEventListener(
	"click",

	function () {
		let mobile_number = document.getElementById("mobile_number").value;
		let amount = document.getElementById("amount").value;

		// Insufficient
		if (amount > current_amt) {
			// stores the current_amt in local storage
			localStorage.setItem("current_amt", current_amt);
			alert("You don't have a sufficient amount to process this transaction.");
			const output_1 = ``;
			document.getElementById("output_1").textContent = output_1;

			const output_2 = ``;
			document.getElementById("output_2").textContent = output_2;
			const output_3 = ``;
			document.getElementById("output_3").textContent = output_3;
			document.getElementById("pasaload-form").reset();
		}

		// No mobile Num
		else if (!mobile_number) {
			const output_1 = `Please enter a mobile number.`;
			document.getElementById("output_1").textContent = output_1;
			document.getElementById("pasaload-form").reset();

			const output_2 = ``;
			document.getElementById("output_2").textContent = output_2;
			const output_3 = ``;
			document.getElementById("output_3").textContent = output_3;
		}

		// Invalid Amount
		else if (!amount) {
			const output_1 = `Please enter a valid amount.`;
			document.getElementById("output_1").textContent = output_1;
			document.getElementById("pasaload-form").reset();

			const output_2 = ``;
			document.getElementById("output_2", "output_3").textContent = output_2;
			const output_3 = ``;
			document.getElementById("output_3").textContent = output_3;
		}

		// Pasaload
		else if (amount <= current_amt) {
			current_amt = current_amt - amount;
			localStorage.setItem("current_amt", current_amt);
			const output_1 = `Mobile Number: ${mobile_number}.`;
			document.getElementById("output_1").textContent = output_1;

			const output_2 = `You Loaded: ${amount}.`;
			document.getElementById("output_2").textContent = output_2;

			const output_3 = `Your Current Amount is: ${current_amt}.`;
			document.getElementById("output_3").textContent = output_3;

			add_pasaload_history(mobile_number, amount, current_amt);
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
