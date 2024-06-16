const hamburgerBtn = document.querySelector('.hamburger'); //button hamburger
const mobileMenu = document.querySelector('.nav-mobile-menu'); //white menu mobile
const allNavItems = document.querySelectorAll('.nav-link');
const footerYear = document.querySelector('.footer-year'); //date in footer

const toggle = () => {
	hamburgerBtn.classList.toggle('is-active'); //toggle button X
	mobileMenu.classList.toggle('activating'); //toggle mobile menu
	document.body.classList.toggle('hide-body');

	allNavItems.forEach((item) => {
		item.addEventListener('click', () => {
			mobileMenu.classList.remove('activating');
			hamburgerBtn.classList.remove('is-active');
		});
	});
};

hamburgerBtn.addEventListener('click', toggle);

// dark/light nav scrolling

window.addEventListener('scroll', function () {
	const wrap = document.querySelector('.wrap');
	const hamburgerInner = document.querySelectorAll(
		'.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after'
	);
	const isMobileMenuActive = mobileMenu.classList.contains('activating'); // Sprawdzenie, czy menu mobilne jest aktywne

	if (window.scrollY >= window.innerHeight - 80 && !isMobileMenuActive) {
		wrap.classList.add('white');
		hamburgerInner.forEach(function (element) {
			element.classList.add('burger-color');
		});
	} else {
		wrap.classList.remove('white');
		hamburgerInner.forEach(function (element) {
			element.classList.remove('burger-color');
		});
	}
});

const btnEmail = document.querySelector('.btn-email');
const toggleEmail = document.querySelector('.toggle-email');

const toggleEmailBtn = () => {
	btnEmail.classList.toggle('bg-indigo-600');
	toggleEmail.classList.toggle('translate-x-3.5');
};

btnEmail.addEventListener('click', toggleEmailBtn);

//date footer
const showYearOnFooter = () => {
	const year = new Date().getFullYear();
	footerYear.innerHTML = year + ' Sylwester Rząd, All Rights Reserved';
};

showYearOnFooter();
