$(document).ready(function () {

    // Resolves issue with Mobile menu not collapsing once a menu item is selected.
    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') ) {
            $(this).collapse('hide');
        }
    });

    // Contact Section:  Clear form buttom
    $('#contact-clear').click(function () {
        $('.contact-form').val('');
    });

    // LightBox Settings
    lightbox.option({
        wrapAround: true
    });

    // Purchase Carousel Settings
    $("#single-carousel").carousel({
        interval: 4000
    });

    $("#subscription-carousel").carousel({
        interval: 4000
    });

});