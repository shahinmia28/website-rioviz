// testimonial slider
$(document).ready(function () {
  $("#testimonial-comments").owlCarousel({
    items: 1,
    itemsDesktop: [1199, 1],
    itemsDesktopSmall: [1000, 1],
    itemsMobile: [770, 1],
    pagination: false,
    autoPlay: true,
  });
});

// news slider
$(document).ready(function () {
  $("#news-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [1000, 2],
    itemsMobile: [650, 1],
    pagination: false,
    autoPlay: true,
  });
});
