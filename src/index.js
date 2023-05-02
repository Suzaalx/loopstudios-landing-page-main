const handleNav = document.querySelector('#hamburger');
const nav = document.querySelector('#mob-nav');
const closeNav = document.querySelector('#close-nav');
handleNav.addEventListener('click', () => {
    nav.classList.toggle('show');
    // hide the hamburger
    handleNav.classList.toggle('hide');
    });
closeNav.addEventListener('click', () => {
    nav.classList.toggle('show');
    // show the hamburger
    handleNav.classList.toggle('hide');
    });