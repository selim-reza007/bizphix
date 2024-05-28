




//getting dom objects in variables
let header = document.querySelector(".header");
let mobileMenu = document.querySelector(".header__navigation");
let mobileMenuOpen = document.querySelector(".header__menu-open"); 
let mobileMenuClose = document.querySelector(".header__menu-close");
let dropdownMobile = document.querySelector(".header__dropdown-m");
let dropdownopen = document.querySelector(".header__dropdown-wrapper"); 
let dropdownToggleIcon = document.querySelector(".header__dropdown-icon");
let dropdownList = document.querySelector("#dropdown-list");


//disapearing hamburger and appearing cross sign
mobileMenuOpen.addEventListener("click", function () {
    this.classList.add("display-nothing");
    mobileMenuClose.classList.remove("display-nothing");
});

//disapearing cross and appearing hamburger sign
mobileMenuClose.addEventListener("click", function () {
    this.classList.add("display-nothing");
    mobileMenuOpen.classList.remove("display-nothing");
});


//smooth menu open close in mobile view
$(document).ready(function () {
    $("#mobile-menu-icon").click(function () {
        $("#header__menu").slideToggle(400);
    });
});
//smooth dropdown menu open close in mobile view
$(document).ready(function () {
    $("#dropdown-link").click(function () {
        $("#dropdown-list").slideToggle(400);
    });
});

//hanfling the width of header section when moving from mobile view to web view
window.addEventListener("resize", function () {
    if (this.innerWidth > 992) {
        mobileMenu.style.display = "block";
        dropdownList.style.display = "block";
    } else {
        mobileMenu.style.display = "none";
        dropdownList.style.display = "none";
    }
});


//Stickying the header when ths scrollY is more than 50px
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add("header-scrolled");
        header.classList.remove("header-noScrolled");
    }
    else {
        header.classList.add("header-noScrolled");
        header.classList.remove("header-scrolled");
    }
});