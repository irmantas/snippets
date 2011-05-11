/*
 *usage:// 
 *		$('#selector').slideContent({
 *			direction:'right', //default left
 *			step:190, //content block step default 190
 *			block:580, //visible block width
 *		});
*/
(function($){
	$.fn.extend({
		slideContent:function(options){
			var defaults={
				direction:'left',
				step:190,
				block:580
			};
			var options=$.extend(defaults, options);
			return this.each(function(){
				var obj = $(this);
				if (obj.is(':animated')) {
					return false;
				}
				var left = parseInt(obj.css('left'));
				if (options.direction == 'left') {
					var width = obj.css('width');
					var delta = parseInt(left)-options.step;
					if (!(parseInt(width) + delta >= options.block)) {
						return false;
					}
				} else {
					if (left>=0) {
						return false;
					}
					var delta = left+options.step;
				}
				obj.animate({
					left:delta + 'px'
				});
			});
		}
	});
})(jQuery);