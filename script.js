new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    breakpoints: {
        320: {
            perView: 1
        },
        480: {
            perView: 1
        }
    },
    autoplay: 2000
}).mount();




$(document).ready(function () {
    
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkVisibility() {
        $('.content-number[data-target]').each(function () {
            if (isElementInViewport(this) && !$(this).hasClass('counted')) {
                $(this).addClass('counted');
                var target = $(this).data('target');
                $(this).prop('Counter', 0).animate({
                    Counter: target
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            }
        });
    }

    // Перевірити видимість при завантаженні сторінки
    checkVisibility();

    // Перевіряти видимість при прокручуванні
    $(window).on('scroll', function () {
        checkVisibility();
    });

    // Перевіряти видимість при зміні розміру вікна
    $(window).on('resize', function () {
        checkVisibility();
    });

    $('#entrySubmit').on('click', (e) => onEntryFormSubmit(e))

    function onEntryFormSubmit() {
        const entrySubmit = $('#entrySubmit');
        const form = document.getElementById('entryForm');
        const name = $("#name").val();
        const telephone = $('#phone').val();
        const errorMessage = $('#errorMessage');
        const successMessage = $('#successMessage');

        if (name.length === 0 || telephone.length === 0) {
            errorMessage.css('display', 'block');
            entrySubmit.css('margin', '0');
        } else {
            entrySubmit.hide();
            errorMessage.hide();
            successMessage.css('display', 'block');
            const link = "https://script.google.com/macros/s/AKfycbzp7Yyipwc4x0Z9NiQgoB0dIE0EBw1GRUd6kTanrOwpnj9Z_mnHZwIb8zxX_YdOTy6L/exec";
            
            const data = new FormData(document.getElementById("entryForm"));
            console.log(data)
            form.reset();
            fetch(link, { method: "post", body: data });
        }
    }

    $('#helpSubmit').on('click', (e) => onHelpFormSubmit(e));

    function onHelpFormSubmit(e) {
        e.preventDefault();
        const helpSubmit = $('#helpSubmit');
        const form = document.getElementById('helpForm');
        const name = $("#helpName").val();
        const telephone = $('#helpPhone').val();
        const errorMessage = $('#errorMessageHelp');
        const successMessage = $('#successMessageHelp');

        if (name.length === 0 || telephone.length === 0) {
            errorMessage.css('display', 'block');
            helpSubmit.css('margin', '0');
        } else {
            helpSubmit.hide();
            errorMessage.hide();
            successMessage.css('display', 'block');
            const link = "https://script.google.com/macros/s/AKfycbzp7Yyipwc4x0Z9NiQgoB0dIE0EBw1GRUd6kTanrOwpnj9Z_mnHZwIb8zxX_YdOTy6L/exec";
            
            const data = new FormData(document.getElementById("helpForm"));
            console.log(data)
            form.reset();
            fetch(link, { method: "post", body: data });
        }
    }

});
