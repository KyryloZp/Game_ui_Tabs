/*
var ratingCircle = document.getElementById("ratingCircle");
ratingCircle.width = 73;
ratingCircle.height = 73;

var ctx = ratingCircle.getContext("2d");


function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();

}
drawPieSlice(ctx, 73/2,73/2,73/2, Math.PI/2, Math.PI/2 + Math.PI/4, 'linear-gradient(to right, #00d4be 0%, #1ae77f 100%)');
drawPieSlice(ctx, 73/2, 73/2, 65/2, 0, 360 + Math.PI/4, "black");

//Угол среза = 2 * PI * значение категории / общее значение




*/

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