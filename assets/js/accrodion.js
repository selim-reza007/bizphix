


let faq__title = document.querySelectorAll(".faq__title");
for (let i = 0; i < faq__title.length; i++) {
    faq__title[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let down = 0;
        let right = 270;
        this.children[0].style.transform = `rotate(${right}deg)`;

        this.parentElement.classList.add("faq__border");
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }

        //removing classes and styles where active is not present
        for (let j = 0; j < faq__title.length; j++) {
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
