//-----------------------------------------------------------------------

function installMenu()
{
	var brandTitle = 'Gender Quiz';
	document.title = brandTitle;

	var str = $('.navbar-header').html();
	str += '<span class="navbar-brand">'+brandTitle+'</span>';
//	$('.navbar-header').html(str);

	$('#navbar').html(str);
}

//-----------------------------------------------------------------------

function installEvents()
{
/*	var resizeTimer;
	$(window).resize(function() {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(recalcPositions, 50);
	});

	function recalcPositions() {
		var elements = $('#board').children();
		var lastTop;
		var y = 0;
		for(var i = 0; i < (elements.length-1); ++i) {
			var e = $(elements[i]);
			var top = parseInt(e.position().top);
			if((0===i) || (lastTop === top)) {
				e.css('margin-left','0');
			} else {
				++y;
				e.css('margin-left',y%2?'6.55em':'0');
			}
			lastTop = top;
		};
	};*/
}

//-----------------------------------------------------------------------

function installTimer()
{
/*	var startTime = (new Date()).getTime();
	var delay = 100;

	function timerFunc() {
		try {
			var diffTime = parseInt(((new Date()).getTime() - startTime) / 1000);
			for(var i = 0; i < config.updates.length; ++i) {
				var update = config.updates[i];
				update.dom.text( update.formatter(update.value,update.change,update.unit,diffTime));
			}
		} catch(e) {
//			console.log(e);
		}

		setTimeout(timerFunc, delay);
	}

	setTimeout(timerFunc, delay);*/
}

//-----------------------------------------------------------------------

function recalcBoard()
{
	$(window).trigger('resize');
}

//-----------------------------------------------------------------------

function createPageGameCard()
{
	var str = '';

	// image

	// time progress
	str += '<div class="progress">';
	str += '<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">';
	str += '<span class="sr-only"></span>';
	str += '</div>';
	str += '</div>';

	// questions
	str += '<ul class="list-group">';
	str += '<li class="list-group-item list-group-item-success">Dapibus ac facilisis in</li>';
	str += '<li class="list-group-item list-group-item-info">Cras sit amet nibh libero</li>';
	str += '<li class="list-group-item list-group-item-warning">Porta ac consectetur ac</li>';
	str += '<li class="list-group-item list-group-item-danger">Vestibulum at eros</li>';
	str += '</ul>';

	// pageing
	str += '<nav>';
	str += '<ul class="pagination pagination-lg">';
	for(var i = 0; i < 5; ++i) {
		str += '<li><a href="#">' + (i + 1) + '</a></li>';
	}
	str += '</ul>';
	str += '</nav>';

	$('#game').html(str);
}

//-----------------------------------------------------------------------

function showPage(number)
{
	var navigation = $('.pagination').children();

	for(var i = 0; i < navigation.length; ++i) {
		var x = navigation.get(i);

		if(i == (number - 1)) {
			$(x).addClass('active');
			$(x).removeClass('disabled');
		} else {
			$(x).removeClass('active');
			$(x).addClass('disabled');
		}
	}

	$('.progress-bar')
	.removeClass('progress-bar-danger').removeClass('progress-bar-warning').addClass('progress-bar-success')
	.width('100%');
}

//-----------------------------------------------------------------------

$(document).ready(function() {
	installMenu();
	installEvents();
	installTimer();
//	recalcBoard();

	createPageGameCard();
	showPage(1);
});

//-----------------------------------------------------------------------
