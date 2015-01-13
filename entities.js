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

$(document).ready(function() {
	
	// Smooth Anchor scrolling
	$('a[href^=#]').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 500);
		return false;
	});

});