$('[data-carousel="single-item"]').each(function(index, el){
    var carousel = el.id;

    $('#'+carousel).owlCarousel({
        slideSpeed : 6000,
        paginationSpeed : 500,
        singleItem : true,

        autoPlay: false,
        stopOnHover: true,

        transitionStyle : "fadeUp"
    });
});

$('[data-carousel="mult-items"]').each(function(index, el) {
    var qntDesktop = $(this).data('md-qnt');
    var qntTablet = $(this).data('sm-qnt');
    var qntMobile = $(this).data('xs-qnt');

    $(this).owlCarousel({
        items: qntDesktop,
        itemsCustom : false,
        itemsDesktop : [1199,qntDesktop],
        itemsDesktopSmall : false,
        itemsTablet: [768,qntTablet],
        itemsTabletSmall: false,
        itemsMobile : [479,qntMobile],
        singleItem : false,

        slideSpeed : 200,
        paginationSpeed : 800,
        rewindSpeed : 1000,

        autoPlay : true,
        stopOnHover : true

    });
});

$('[data-event="prev"]').on('click', function(event){
    event.preventDefault();

    var target = $(this).data('target');
    $(target).trigger("owl.prev");
});

$('[data-event="next"]').on('click', function(event){
    event.preventDefault();

    var target = $(this).data('target');
    $(target).trigger("owl.next");
});