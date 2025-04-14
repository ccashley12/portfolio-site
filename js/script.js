function toggle_light_theme() {
	var app = document.body;
	var logo = document.getElementById('theme-logo');
	var toggleSwitch = document.getElementById('toggle');
	var currentTheme = sessionStorage.getItem('theme') || 'dark'; // Default to dark

	// Toggle the theme
	var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
	app.setAttribute('data-theme', newTheme);

	// Update logo
	if (logo) {
		var newLogoSrc =
			newTheme === 'dark' ? logo.getAttribute('data-dark') : logo.getAttribute('data-light');

		if (newLogoSrc) {
			logo.src = newLogoSrc + '?v=' + new Date().getTime(); // Cache-busting
		}
	}

	// Update switch position
	toggleSwitch.checked = newTheme === 'light';

	// Store theme choice in session storage
	sessionStorage.setItem('theme', newTheme);
}

// Apply stored theme on page load
document.addEventListener('DOMContentLoaded', function () {
	var app = document.body;
	var logo = document.getElementById('theme-logo');
	var toggleSwitch = document.getElementById('toggle');

	// Get stored theme or default to 'dark'
	var storedTheme = sessionStorage.getItem('theme') || 'dark';
	app.setAttribute('data-theme', storedTheme);

	// Ensure logo updates correctly on page load
	if (logo) {
		var storedLogoSrc =
			storedTheme === 'dark' ? logo.getAttribute('data-dark') : logo.getAttribute('data-light');

		if (storedLogoSrc) {
			logo.src = storedLogoSrc + '?v=' + new Date().getTime(); // Cache-busting
		}
	}

	// Set the toggle switch state
	toggleSwitch.checked = storedTheme === 'light';

	// Hamburger menu
	const menuButton = document.querySelector('.hamburger-menu');
	const navigation = document.querySelector('.main-navigation');

	if (menuButton && navigation) {
		menuButton.addEventListener('click', function () {
			navigation.classList.toggle('active');
			menuButton.classList.toggle('active');
		});
	}
});