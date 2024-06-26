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

