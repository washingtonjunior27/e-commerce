const toggle = document.getElementById('toggle');
const header = document.querySelector('.header');
const navbarList = document.querySelector('.header-navbar-list')

// MENU MOBILE
toggle.addEventListener('click', () => {
    const navbar = document.querySelector('.header-navbar');
    navbar.classList.toggle("active");
})

// CHANGE MENU COLOR ON SCROLL
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.header-navbar');
    if(window.scrollY > 40){
        header.classList.add('scroll-color')
    }else{
        header.classList.remove('scroll-color')
    }
})

// CLOSE MENU MOBILE ON CLICK
navbarList.addEventListener("click", () => {
    const navbar = document.querySelector('.header-navbar');
    if(navbar.classList.contains("active")){
        navbar.classList.remove("active");
    }
})