$(document).ready(function() {
    setTimeout(() => {
        let preloader = document.querySelector('#page-preloader');
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 2000);
    /* Preloader */


    $('.humburger__icon').on('click', function() {
        $('.ul__menu').toggleClass('show');
    });
    /* Humburger */


    let slideIndex = 1,
        slides = document.querySelectorAll('.container__track__img'),
        next = document.querySelector('.container__track__next'),
        prev = document.querySelector('.container__track__prev');

    slides[1].style.content = 'url(/assets/img/gruz.png)';
    slides[2].style.content = 'url(/assets/img/gruz3.png)';

    showSlides(slideIndex);
    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block';
    }
    function plusSlides(n) {
        showSlides (slideIndex +=n);
    }
    prev.addEventListener('click', function() {
        plusSlides(-1);
    });
    next.addEventListener('click', function() {
        plusSlides(1);
    });
    /* Slider track */






});


let active = document.querySelector('.active'),
langs = document.querySelectorAll('.header__line__block')[0],
lan = document.querySelectorAll('.lang'),
ru = document.querySelectorAll('.ru'),
en = document.querySelectorAll('.en'),
fr = document.querySelectorAll('.fr');


function one() {
    if (lan[0].classList.contains('active')) {
        ru.forEach((item) => item.style.display = 'block');
        en.forEach((item) => item.style.display = 'none');
        fr.forEach((item) => item.style.display = 'none');
    } else {
        lan[0].style.color = 'white';
    }
}

function two() {
    if (lan[1].classList.contains('active')) {
        ru.forEach((item) => item.style.display = 'none');
        en.forEach((item) => item.style.display = 'block');
        fr.forEach((item) => item.style.display = 'none');
    } else {
        lan[1].style.color = 'white';
    }
}

function three() {
    if (lan[2].classList.contains('active')) {
        ru.forEach((item) => item.style.display = 'none');
        en.forEach((item) => item.style.display = 'none');
        fr.forEach((item) => item.style.display = 'block');
    } else {
        lan[2].style.color = 'white';
    }
}

langs.addEventListener('click', function(event) {
    for (let i = 0; i < lan.length + 1; i++) {
        if (!event.target.classList.contains('active') && event.target == lan[i]) {
            lan.forEach((item) => item.classList.remove('active'));
            lan[i].classList.add('active');
            one();
            two();
            three();
        }
    }
});