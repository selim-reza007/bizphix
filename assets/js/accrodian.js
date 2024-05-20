(function ($) {


    $('#accordion h3').on('click', function () {

        //capture all icons
        var iconChevron = $('.fa-chevron-right'),

            //capture current icon
            currentIcon = $(this).children('.fa-chevron-right');

        //Rotate none clicked icons back to original position
        $(iconChevron).not(currentIcon).removeClass('is-rotate');

        //Need rotate chevron on click 
        $(this).children('.fa-chevron-right').toggleClass('is-rotate');

        //Toggle is-hidden class on clicked and add it to previously clicked
        $(this).next()
            .toggleClass('is-hidden')
            .siblings('.drawer').addClass('is-hidden');

    });
}(jQuery));
