document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth',
		});
	});
});

document.addEventListener('DOMContentLoaded', function () {
	const hamburger = document.getElementById('hamburger');
	const navMenu = document.getElementById('nav-menu');

	hamburger.addEventListener('click', function () {
		navMenu.classList.toggle('active');
		hamburger.classList.toggle('active');
	});
});
