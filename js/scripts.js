jQuery(document).ready(function($){
	var $timeline_block = $('.cd-timeline-block');

	//hide timeline blocks which are outside the viewport
	$timeline_block.each(function(){
		if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
			$(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		}
	});

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		$timeline_block.each(function(){
			if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
				$(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
			}
		});
	});

	//Change glyphicon on accordion on toggle
	$('#accordion').on('hide.bs.collapse show.bs.collapse', function (n) {
		$(n.target).siblings('.panel-heading').find('span.glyphicon')
		.toggleClass('glyphicon-plus glyphicon-minus');
	});

	//Modal for cheat-sheets
	$('li img').on('click',function(){
		var src = $(this).attr('src');
		var img = '<img src="' + src + '" class="img-responsive"/>';
		$('#cheats-modal').modal();
		$('#cheats-modal').on('shown.bs.modal', function(){
			$('#cheats-modal .modal-body').html(img);
		});
		$('#cheats-modal').on('hidden.bs.modal', function(){
			$('#cheats-modal .modal-body').html('');
		});
	});  
});