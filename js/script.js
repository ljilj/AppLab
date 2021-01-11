// Toggle menu
const navToggle = document.querySelector('.js-menu-toggle');
const links = document.querySelector('.c-nav-links__container');

navToggle.addEventListener('click', function() {
    links.classList.toggle("active-menu");
});


// Toggle-switch
var btn = document.getElementById('js-btn');

function monthlyClick() {
	btn.style.left = '2px'; 
}

function annualyClick() {
	btn.style.left = '110px';
}
