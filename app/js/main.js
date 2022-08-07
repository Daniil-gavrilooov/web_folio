
$(function () {
    $('.testimonials__slider').slick({
        slidesToShow: 2,
        nextArrow: '<img class="next__arrow" src="images/arrow-next_slider.svg" alt="">',
        prevArrow: ' <img class="prew__arrow" src="images/prew__arrow-slider.svg" alt="">'
        
        
    });
})

let burgerBtn = document.querySelector('.header__burger-btn')

burgerBtn.addEventListener(onclick = function(){
    let burgerMenu = document.querySelector('.header__burger-menu')
    let headerBasket = document.querySelector('.header__basket')
    let body = document.querySelector('.body')

    body.classList.toggle("body-lock")
    burgerBtn.classList.toggle('header__burger-btn--active')
    burgerMenu.classList.toggle('header__burger-menu--active')
    headerBasket.classList.toggle('header__basket--active')
})