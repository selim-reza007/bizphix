


let playBtn = document.querySelector(".hero__play");
playBtn.addEventListener("click" , () => {
    document.querySelector(".hero__video").classList.remove("display-none");
})

let closeVideo = document.querySelector(".hero__video-close");
closeVideo.addEventListener("click", () => {
    document.querySelector(".hero__video").classList.add("display-none");
})