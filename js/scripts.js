/* activate scrollspy menu */
$('body').scrollspy({
    target: '#navbar-collapsible',
    offset: 52
});

/* smooth scrolling sections */
$('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - 50
            }, 800);

            if (this.hash == "#section1") {
                $('.scroll-up').hide();
            } else {
                $('.scroll-up').show();
            }

            // activte animations in this section
            target.find('.animate').delay(1200).addClass("animated");
            setTimeout(function () {
                target.find('.animated').removeClass("animated");
            }, 2000);

            return false;
        }
    }
});

/* NAV */
$('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
});

/* Auto preenchimento formulário */
$("#autoFill").click(function () {
    $("#token").val("512e3e0460c772efdb487295824d3181");
    $("#email").val("gabriel.feitosa@codeby.com.br");
    $("#nomeDev").val("Gabriel");
    $("#estado").val("SP");
    $("#nivel").val("Ninja");
});
