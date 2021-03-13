$(function() {

    // header__fixed
    let header = $('#header');
    let intro = $('#intro');
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, introH);

    $(window).on('scroll load resize', function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll() {
        if (scrollPos > introH) {
            
            header.addClass('header__fixed');
        } else {
            header.removeClass('header__fixed');
        }
    };

    //smooth scroll
    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        let blockID = $(this).data('scroll');

        let elementOffset = $(blockID).offset().top;


        $('html, body').animate({
            scrollTop: elementOffset - 100
            
        }, 700);
        }
    )

    // navToggle

    let nav = $('#nav');
    let navToggle = $('#navToggle');
    $('#navToggle').on('click', function(event) {
        event.preventDefault();

        nav.toggleClass('show');
    })
});

