let slide = 1;
let slide_move = document.querySelector(".reviews__slider__review").clientWidth + 24; 
let max_slide = document.querySelectorAll(".reviews__slider__review").length;
let end_slide_offset = 1;
if (document.body.clientWidth <= 1024) {
    end_slide_offset = 0;
}

window.addEventListener("resize", () => {
    slide_move = document.querySelector(".reviews__slider__review").clientWidth + 24; 
    document.querySelectorAll(".reviews__slider__review").forEach((el) => {
        el.style.left = 0 - (slide - 1) * slide_move + "px";
    })
    if (document.body.clientWidth <= 1024) {
        end_slide_offset = 0;
    } else {
        end_slide_offset = 1
    }
})
document.querySelector(".reviews__slider__left_button").onclick = () => {
    if (slide > 1) {
        slide -= 1;
        document.querySelectorAll(".reviews__slider__review").forEach((el) => {
            el.style.left = 0 - (slide - 1) * slide_move + "px";
        })
    }
}
document.querySelector(".reviews__slider__right_button").onclick = () => {
    if (slide < max_slide - end_slide_offset) {
        slide += 1;
        document.querySelectorAll(".reviews__slider__review").forEach((el) => {
            el.style.left = 0 - (slide - 1) * slide_move + "px";
        })
    }
}

document.querySelector(".header__top__menu__button").onclick = () => {
    document.querySelector("header").classList.toggle("header__menu__closed");
}