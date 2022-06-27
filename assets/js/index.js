// Code slider
let headerSliderImages = document.querySelectorAll(".header-img-list img");
let headerSlidercomments = document.querySelectorAll(".slider-comments-list .comment-item");

let activeImgIndex = 0;
let activeCommentIndex = 0;
let previousImgIndex = headerSliderImages.length - 1;
let previousCommentIndex = headerSlidercomments.length - 1;

let slide = function() {
    // removing
    headerSliderImages[activeImgIndex].classList.remove("active");
    headerSlidercomments[activeCommentIndex].classList.remove("active");
    headerSliderImages[previousImgIndex].classList.remove("previous");
    headerSlidercomments[previousCommentIndex].classList.remove("previous");
    // maj indexes
    activeImgIndex++;
    activeCommentIndex++;
    previousImgIndex++;
    previousCommentIndex++;
    activeImgIndex %= headerSliderImages.length;
    activeCommentIndex %= headerSlidercomments.length;
    previousImgIndex %= headerSliderImages.length;
    previousCommentIndex  %= headerSlidercomments.length;
    // adding
    headerSliderImages[activeImgIndex].classList.add("active");
    headerSlidercomments[activeCommentIndex].classList.add("active");
    headerSliderImages[previousImgIndex].classList.add("previous");
    headerSlidercomments[previousCommentIndex].classList.add("previous");
}

slide()
setInterval(() => {
    slide();
    console.log("slide");
}, 5000);