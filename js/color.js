window.addEventListener('click', function(e) {
	if (e.target.classList.contains('container-child')) {
		e.target.style.color = null;
	} else {
		e.target.style.color = 'blue';
	}
});
