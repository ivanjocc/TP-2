function sumar() {
	const form = document.getElementById('form');
	let balance = document.getElementById('balance').value;
	let debit = document.getElementById('debit').value;
	const credit = document.getElementById('credit').value;
	// const plus = document.getElementById('plus').value;
	// const minus = document.getElementById('minus').value;

	let total = 0;

	total = (parseInt(balance) + parseInt(debit));

	document.getElementById('balance').value = total;

	// Limpiar inputs
	document.getElementsByTagName("input")[1].value = "";
	document.getElementsByTagName("input")[2].value = "";
}

function restar() {
	const form = document.getElementById('form');
	let balance = document.getElementById('balance').value;
	let debit = document.getElementById('debit').value;
	const credit = document.getElementById('credit').value;
	// const plus = document.getElementById('plus').value;
	// const minus = document.getElementById('minus').value;

	let total = 0;

	total = (parseInt(balance) - parseInt(credit));

	document.getElementById('balance').value = total;

	// Limpiar inputs
	document.getElementsByTagName("input")[1].value = "";
	document.getElementsByTagName("input")[2].value = "";
}

