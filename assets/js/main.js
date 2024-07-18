$(document).ready(function(){

    //Smooth scroll con jquery - sacado de la presentacion dia 12
    $(".nav-link").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
                }, 50, function(){   
                    window.location.hash = hash;
            });
        }
    });

    //agregue una opacidad del hacer scroll, con el id nav 
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) { 
            $('#nav').addClass('scroll-nav');
        } else {
            $('#nav').removeClass('scroll-nav');
        }
    });
    
});
   