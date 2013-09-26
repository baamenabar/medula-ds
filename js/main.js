$(function() {
	var Page = (function() {
		var $navArrows = $('#nav-arrows'),
			$nav = $('#nav-dots > span'),
			slitslider = $('#slider').slitslider( {
				autoplay : true,
				onBeforeChange : function(slide, pos) {
					$nav.removeClass('nav-dot-current');
					$nav.eq(pos).addClass('nav-dot-current');
				},
				onAfterChange: function(slide, pos){
					var that = this;
					$(slide).find('video').each(function(){
						slitslider.pause();
						$(this)[0].play();
						$(this).bind('ended', function(){
							slitslider.play();
						});
					});
				}
			} ),
			init = function() {
				initEvents();
			},
			initEvents = function() {};
			return { init : init };
	})();
	Page.init();
});
