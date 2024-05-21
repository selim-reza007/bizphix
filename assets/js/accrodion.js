


let faq__title = document.querySelectorAll(".faq__title");
for (let i = 0; i < faq__title.length; i++) {
    faq__title[i].addEventListener("click", function () {
        this.classList.toggle("active");
        this.children[0].classList.add("display-none");
        this.children[1].classList.remove("display-none");
        for (let j = 0; j < faq__title.length; j++) {
            if (faq__title[j].classList.contains("active")) {
                continue;
            } else {
                faq__title[j].children[0].classList.remove("display-none");
                faq__title[j].children[1].classList.add("display-none");
            }
        }
        this.parentElement.classList.toggle("faq__border");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })
}
