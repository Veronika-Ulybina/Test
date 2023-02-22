'use strict';

// -Slick slider (jQuery)-
$(document).ready(function() {
    $('.slider-slick').slick({
        adaptiveHeight: true,
        speed: 800,
        initialSlide: 1,
        centerMode: true,
    });
});

// -Header (Js)-
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    IOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.IOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_ps');
}

// -Add class active for body background-
const page = document.querySelector('.page');
//const link = document.querySelectorAll('.menu__link');

/*function showBackground() {
    page.classList.add('active');
}

function closeBackground() {
    page.classList.remove('active');
}

page.addEventListener('click', function (event) {
    if (event.target.closest('.menu__link')) {
        showBackground();
    }

    if (!event.target.closest('.menu__link')) {
        closeBackground();
    }
});*/

//page.addEventListener('mouseover', function (event) {

//});

document.querySelectorAll('.menu__link').forEach(e=>{
    e.addEventListener('mouseover',function(){
        page.classList.add('active');
    })
    e.addEventListener('mouseout',function(){
        page.classList.remove('active');
    })
})

/*function showConsole() {
    page.classList.add('active');
}

link.forEach(item => {
    item.addEventListener('click', showConsole);
})*/






