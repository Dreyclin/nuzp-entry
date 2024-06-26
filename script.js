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


 

  $(document).ready(function() {

    $('#burger').on('click', () => {
       $('#menu').toggleClass("visible");
    });

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
        $('.content-number[data-target]').each(function() {
            if (isElementInViewport(this) && !$(this).hasClass('counted')) {
                $(this).addClass('counted');
                var target = $(this).data('target');
                $(this).prop('Counter', 0).animate({
                    Counter: target
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
            }
        });
    }

    // Перевірити видимість при завантаженні сторінки
    checkVisibility();

    // Перевіряти видимість при прокручуванні
    $(window).on('scroll', function() {
        checkVisibility();
    });

    // Перевіряти видимість при зміні розміру вікна
    $(window).on('resize', function() {
        checkVisibility();
    });
  });
