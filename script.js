// Initialize WOW.js
new WOW().init();

// Smooth scrolling for anchor links
$(document).ready(function(){
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
});

console.log("Welcome to my portfolio!");
