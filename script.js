const toggle = document.getElementById('toggle');
const header = document.querySelector('.header');

const login = document.getElementById('login');
const closeLogin = document.getElementById('closeLogin');

const search = document.getElementById('search');
const closeSearch = document.getElementById('closeSearch');

const navbarList = document.querySelector('.header-navbar-list');


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

// USER LOGIN
login.addEventListener('click', () => {
    const user = document.querySelector('.user');
    user.classList.toggle('active')
})
closeLogin.addEventListener('click', () => {
    const user = document.querySelector('.user');
    user.classList.toggle('active')
})

// SEARCH
search.addEventListener('click', ()=>{
    const searchModal = document.querySelector('.search');
    searchModal.classList.toggle('active');
})
closeSearch.addEventListener('click', () => {
    const searchModal = document.querySelector('.search');
    searchModal.classList.toggle('active')
})