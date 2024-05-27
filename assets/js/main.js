




let playBtn = document.querySelector(".hero__play");
playBtn.addEventListener("click", () => {
    document.querySelector(".hero__video").classList.remove("display-none");
})

let mobileMenu = document.querySelector(".header__navigation");
let mobileMenuOpen = document.querySelector(".header__menu-open"); //*
let mobileMenuClose = document.querySelector(".header__menu-close"); //*
let dropdownMobile = document.querySelector(".header__dropdown-m");
let dropdownopen = document.querySelector(".header__li-dropdown");
let dropdownToggleIcon = document.querySelector(".header__dropdown-icon");

mobileMenuOpen.addEventListener("click", function () {
    mobileMenu.style.display = "block";
    this.classList.add("display-nothing");
    mobileMenuClose.classList.remove("display-nothing");
});

mobileMenuClose.addEventListener("click", function () {
    mobileMenu.style.display = "none";
    this.classList.add("display-nothing");
    mobileMenuOpen.classList.remove("display-nothing");
});

dropdownToggleIcon.addEventListener("click", function () {
    dropdownopen.classList.toggle("display-nothing");
})

// $(document).ready(function () {
//     var menu = $('.header');
//     var origOffsetY = menu.offset().top;

//     function onScroll() {
//         if ($(window).scrollTop() >= origOffsetY) {
//             menu.addClass('sticky');
//         } else {
//             menu.removeClass('sticky');
//         }
//         console.log("On Scroll");
//     }

//     document.onscroll = onScroll;

// });
