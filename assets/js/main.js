




let playBtn = document.querySelector(".hero__play");
playBtn.addEventListener("click", () => {
    document.querySelector(".hero__video").classList.remove("display-none");
})

let mobileMenu = document.querySelector(".header__menu-m"); //not needed
let mobileMenuOpen = document.querySelector(".header__menu-open-m"); //*
let mobileMenuClose = document.querySelector(".header__mobile-menu-close"); //*
let dropdownMobile = document.querySelector(".header__dropdown-m");
let dropdownopen = document.querySelector(".dropdown-open-close");

mobileMenuOpen.addEventListener("click", function () {
    this.classList.add("display-nothing");
    mobileMenuClose.classList.remove("display-nothing");
});

mobileMenuClose.addEventListener("click", function () {
    this.classList.add("display-nothing");
    mobileMenuOpen.classList.remove("display-nothing");
})

$(document).ready(function () {
    var menu = $('.header');
    var origOffsetY = menu.offset().top;

    function onScroll() {
        if ($(window).scrollTop() >= origOffsetY) {
            menu.addClass('sticky');
        } else {
            menu.removeClass('sticky');
        }
        console.log("On Scroll");
    }

    document.onscroll = onScroll;

});
