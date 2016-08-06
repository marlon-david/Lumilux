$("#img-zoom").elevateZoom({
	zoomType: "inner",
	cursor: "crosshair",
	gallery: 'miniaturas',
	galleryActiveClass: 'active'
});
$("#img-zoom").bind("click", function(e) {  
	var ez = $('#img-zoom').data('elevateZoom');	
	$.fancybox(ez.getGalleryList());
	return false;
});
$('a.scrollIntoView').on('click', function(e) {
	e.preventDefault();
	var alvo = $(this).attr('href');
	var scrllTo = $(alvo).offset().top;

	$('body,html').animate({scrollTop: scrllTo},1000);

	window.location.hash = alvo;
});

$('input[data-jump]').on('keyup', function(e) {
	var max = this.maxlength || 5;
	if (((e.keyCode > 47 && e.keyCode < 58) || (e.keyCode > 95 && e.keyCode < 106)) && this.value.length == max) {
		var next = $(this).data('jump');
		$('input[name="'+next+'"]').focus();
	}
});