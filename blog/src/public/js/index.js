
		var menuary = ['html', 'js', 'css', 'java', 'gulp', 'git', 'album', 'novel']
		$(function() {
			$('.pdprecent_t40').css('padding-top', $(window).height()*.3);
			for (let i = 0; i < menuary.length; i++) {
				$(".menu").append(`<div class="text-center" style=${fontStylefn()}>${menuary[i]}</div>`)
			}

			function fontStylefn() {
				return `font-size:${Math.floor(Math.random()*11)+10}px;opacity:${Math.random()+.5};line-height:80px;`
			}
			let oldsize, oldopacity;
			$('.menu>div').hover(function() {
				oldsize = $(this).css('font-size');
				oldopacity = $(this).css('opacity');
				$(this).css({
					'font-size': '26px',
					'opacity': '1'
				})
			}, function() {
				$(this).css({
					'font-size': oldsize,
					'opacity': oldopacity
				})
			})
		})