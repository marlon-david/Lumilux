$('.menu-lateral [data-toggle="collapse"]').each(function(){
	var target = $(this).data('target') || this.href;
	var $target = $(target);

	if($target.length && !$target.hasClass('in')){
		$(this).addClass('collapsed');
	}
});