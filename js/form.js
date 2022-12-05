// const formulario = document.getElementById('form').value;
// const nombre = document.getElementById('name').value;
// const apellido = document.getElementById('last-name').value;
// const direccion = document.getElementById('adress').value;
// const telefono = document.getElementById('phone').value;
// const contrasena = document.getElementById('password').value;
// const gender1 = document.getElementById('man').value;
// const gender2 = document.getElementById('woman').value;
// const enviar = document.getElementsByTagName('button');

// formulario.addEventListener('submit', (e) => {
// 	e.preventDefault;

// 	if (nombre != "") {
// 		formulario.reset();
// 		document.getElementById('fail').classList.add('active');
// 		console.log('prueba');
		
// 		setTimeout(() => {
// 			document.getElementById('fail').classList.remove('active');
// 		}, 5000);
		
// 	} else {
// 		console.log('no se mando un choriperro');
// 	}
// })

function validar(e) {
	// identificar de campos
	const formulario = document.getElementById('form').value;
	const nombre = document.getElementById('name').value;
	const apellido = document.getElementById('last-name').value;
	const direccion = document.getElementById('adress').value;
	const telefono = document.getElementById('phone').value;
	const contrasena = document.getElementById('password').value;
	let fail = document.getElementById('fail');
	let success = document.getElementById('success');
	// console.log(fail);
	// document.querySelector('input[name="gender"]:checked')
	// fail.className -= " inactive";
	// fail.className += " active";

	if ((nombre.length && apellido.length && direccion.length && telefono.length && contrasena.length) != 0 && document.querySelector('input[name="gender"]:checked')) {
		// Copys de error no se muestran
		fail.classList.add('inactive');
		success.classList.add('inactive');

		// Se muestra el mensaje de exito
		success.classList.add('active');

		// En 3 seg se borra el mensaje
		setTimeout(() => {
			success.classList.remove('active');
		}, 3000);

		// Vaciar campos
		document.getElementById('form').reset();
	} else {
		// Copys de error no se muestran
		fail.classList.add('inactive');
		success.classList.add('inactive');

		// Se muestra el mensaje de error
		fail.classList.add('active');

		// En 3 seg se borra el mensaje
		setTimeout(() => {
			fail.classList.remove('active');
		}, 3000);

		// Vaciar campos
		document.getElementById('form').reset();
	}
}

