



let mobileMenu = document.querySelector(".header__menu-m"); //not needed
let mobileMenuOpen = document.querySelector(".header__menu-open-m"); //*
let mobileMenuClose = document.querySelector(".header__mobile-menu-close"); //*
let dropdownMobile = document.querySelector(".header__dropdown-m");
let dropdownopen = document.querySelector(".dropdown-open-close");

mobileMenuOpen.addEventListener("click", function () {
    // mobileMenu.classList.remove("display-nothing");
    this.classList.add("display-nothing");
    mobileMenuClose.classList.remove("display-nothing");
});

mobileMenuClose.addEventListener("click", function () {
    // mobileMenu.classList.add("display-nothing");
    this.classList.add("display-nothing");
    mobileMenuOpen.classList.remove("display-nothing");
    // dropdownMobile.classList.add("display-nothing");
})

//making drowpown in mobile menu

// dropdownopen.addEventListener("click", function () {
//     dropdownMobile.classList.toggle("display-nothing");
// })