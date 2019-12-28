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
/* Langs */



$(function() {
 
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('.button__up').fadeIn(); 
        } else {
        $('.button__up').fadeOut();
        }
});
     
$('.button__up').click(function() {  
    $('body,html').animate({scrollTop:0},800);
     }); 
});
/* Scroll UP */


$(function() {
    $('.container__track__btn').on('click', function(e) {
        e.preventDefault();
        $('.overlay').animate({opacity: 'toggle'});
        $('.modal').fadeToggle('slow');
    });

    $('.close').on('click', function() {
        $('.overlay').animate({opacity: 'toggle'});
        $('.modal').fadeToggle('slow');
    });
});

/* Modal */

$('.nav').on('click', function() {
    var elem = $(this).attr('href');
    var dist = $(elem).offset().top;

    $('html, body').animate({'scrollTop': dist}, 800);

    return false;
});


$('.logo').on('click', function() {
    var elem = $(this).attr('href');
    var dist = $(elem).offset().top;

    $('html, body').animate({'scrollTop': dist}, 800);

    return false;
});
/* Scroll menu */