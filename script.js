new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    breakpoints: {
        320: {
            perView: 1
        }
    }
  }).mount();

