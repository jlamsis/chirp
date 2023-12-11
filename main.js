const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('hamburger-nav')

hamburger.addEventListener('click', hamMenu);

function hamMenu(){

    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');

}

const navLink = document.querySelectorAll('.hamburger-nav-links');

navLink.forEach(n => n.addEventListener("click", hamMenu));

function closeMenu(){
    hamMenu.style.display = 'none';
}