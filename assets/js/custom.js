

// Activator for video popup when click on video section of hero section
$('.video').magnificPopup({
    type: 'iframe',
    iframe: {
        patterns: {
            youtube: {
                index: 'youtube.com',
                id: function (url) {
                    var m = url.match(/[?&]v=([^&#]+)/);
                    if (m !== null) {
                        return m[1];
                    }
                    return null;
                },
                src: 'https://www.youtube.com/embed/%id%'
            }
        }
    }
});


//activator for countdown in statistics section
let job = true;
window.addEventListener("scroll", function () {
    // checking if scroolY has happned and setting up true for start the countdown only for first time
    if (window.scrollY >= 1 && job) {
        $(".num1").countMe(0, 0.001);
        $(".num2").countMe(0, 50);
        $(".num3").countMe(0, 60);
        $(".num4").countMe(0, 100);
        job = false;
    }
});


// activator for clients slider
var swiper = new Swiper(".mySwiper-clients", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        // el: ".swiper-pagination",
        // clickable: true,
    },
    navigation: {
        // nextEl: ".swiper-button-next",
        // prevEl: ".swiper-button-prev",
    },
});


// all logics related to accordion of FAQ section

//getting all faq title container
let faq__title = document.querySelectorAll(".faq__title");
for (let i = 0; i < faq__title.length; i++) {
    //adding event listener to each and every single faq title container
    faq__title[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let down = 0;
        let right = 270;
        // rotating icon where faq title container have "active" class
        this.children[0].style.transform = `rotate(${right}deg)`;

        //adding class to faq title container's parent 
        this.parentElement.classList.add("faq__border");
        let panel = this.nextElementSibling;
        // checking if the next sibling of faq title container is opend
        if (panel.style.maxHeight) {
            // if true then we are closing the sibling content
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }

        //removing classes and styles where active is not present
        for (let j = 0; j < faq__title.length; j++) {
            /* checking which faq title container having "active" class and this object is the current object on which we are intreacting. Which are true we are just skiping the object, but which are not true we are performing operation on their class */
            if (faq__title[j].classList.contains("active") && this === faq__title[j]) {
                continue;
            } else {
                faq__title[j].parentElement.classList.remove("faq__border");
                faq__title[j].children[0].style.transform = `rotate(${down}deg)`;
                faq__title[j].nextElementSibling.style.maxHeight = null;
                faq__title[j].classList.remove("active");
            }
        }
    })
}






//testimonial activator



//getting the width of current window to set number of card
const bodyWidth = window.innerWidth;
let itemNumber = 3;
if (bodyWidth <= 1000) {
    itemNumber = 2;
}
if (bodyWidth <= 650) {
    itemNumber = 1;
}

var swiper = new Swiper(".mySwiper", {
    //setting number of card bassed on window size
    slidesPerView: itemNumber,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

