var slideLeft = {
    reset: true,
    distance: '150%',
    origin: 'left',
    duration: 1550,
    opacity: 0
};

var slideContent = {
    reset: true,
    distance: '150%',
    origin: 'right',
    duration: 1000,
    opacity: 0
};

ScrollReveal().reveal('.logo-bp', slideLeft);
ScrollReveal().reveal('.slideContent', slideContent);