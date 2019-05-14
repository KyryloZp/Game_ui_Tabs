$('.tabs').on('click', '.tabs_header__item', function(event){
	$('.tabs_header__item-active').removeClass('tabs_header__item-active');
	var tab = $(this).index();
	$(this).toggleClass('tabs_header__item-active');

	var tabs_click = {
		tabs_selectors: $('.tabs_content').children(),
		classChange(value) {
			this.tabs_selectors.eq(value).removeClass('hidden');
			this.tabs_selectors.not(this.tabs_selectors.eq(value)).addClass('hidden');
		}
	}
	tabs_click.classChange(tab);
})