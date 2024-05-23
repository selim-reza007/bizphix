



const bodyWidth = window.innerWidth;
let itemNumber = 3;
if (bodyWidth <= 1000) {
    itemNumber = 2;
}
if (bodyWidth <= 650) {
    itemNumber = 1;
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: itemNumber,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// const bodyWidth = window.innerWidth;
// console.log("Body width:", bodyWidth);
