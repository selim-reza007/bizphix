



let job = true;
window.addEventListener("scroll", function () {
    if (window.scrollY >= 1 && job) {
        $(".num1").countMe(0, 0.001);
        $(".num2").countMe(0, 50);
        $(".num3").countMe(0, 60);
        $(".num4").countMe(0, 100);
        job = false;
    }
})
