$(document).ready(function(){
    $("#hire-me").on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
    });

    $("#learn-more").on('click', function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 1000);
    });

    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function(){
                window.location.hash = hash;
            });
        }
    });
});