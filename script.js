// Get the navbar toggle button and the navbar menu
const toggleBtn = document.getElementById('toggleBtn');
const navbarNav = document.getElementById('navbarNav');

// Toggle the 'active' class when the toggle button is clicked
toggleBtn.addEventListener('click', function () {
    navbarNav.classList.toggle('active');
});