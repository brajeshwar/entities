// fix menu on scroll
var $win = $(window)
    , $nav = $('.menu')
    , $data = $('.data-head-fixed')
    , navTop = $('.menu').length && $('.menu').offset().top
    , isFixed = 0

processScroll()

$win.on('scroll', processScroll)

function processScroll() {
    var i, scrollTop = $win.scrollTop()
    if (scrollTop >= navTop && !isFixed) {
        isFixed = 1
        $nav.addClass('menu-fixed')
        $data.css ( { visibility: "visible" } )
    } else if (scrollTop <= navTop && isFixed) {
        isFixed = 0
        $nav.removeClass('menu-fixed')
        $data.css ( { visibility: "hidden" } )
    }
}

// Scroll to Top
$(document).ready(function(){
    // hide #back-top first
    $(".scroll-top").hide();

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scroll-top').fadeIn();
            } else {
                $('.scroll-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('.scroll-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
});

// Smooth Anchor scrolling
$(document).ready(function() {
    $('a[href*=#]').each(function() {
        if($(this).attr('href').indexOf("#") == 0) {
            $(this).click(function(e) {
              e.preventDefault();
              var targetOffset = $($(this).attr('href')).offset().top;
              $('body').animate({scrollTop: targetOffset - 75}, 500);
            });
        }
    });

});
