$('.menu-lateral [data-toggle="collapse"]').each(function(){
	var target = $(this).data('target') || this.hash;
	console.log(target);

	var $target = $(target);

	if($target.length && !$target.hasClass('in')){
		$(this).addClass('collapsed').addClass('toggle-collapse');
	} else {
		$(this).addClass('toggle-collapse').removeClass('collapsed');
	}
});