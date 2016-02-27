//-----------------------------------------------------------------------

function installMenu()
{
	var brandTitle = 'Unisex';
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
	str += '<div class="panel panel-default">';
	str += '<div class="panel-body">';
	str += 'Basic panel example';
	str += '</div>';
	str += '<div class="panel-footer">Panel footer</div>';
	str += '</div>';

	// time progress
	str += '<div class="panel panel-default">';
	str += '<div class="panel-body">';
	str += 'Finde das neutrale Wort';
	str += '</div>';
	str += '<div class="panel-footer" style="padding:0;">';
	str += '<div class="progress" style="margin:0;">';
	str += '<div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">';
	str += '</div>';
	str += '</div>';
	str += '</div>';
	str += '</div>';

	// questions
	str += '<ul class="list-group" id="questions">';
	str += '<li class="list-group-item"></li>';
	str += '<li class="list-group-item"></li>';
	str += '<li class="list-group-item"></li>';
	str += '<li class="list-group-item"></li>';
	str += '</ul>';

	// pageing
	str += '<nav style="text-align:center;">';
	str += '<ul class="pagination pagination-lg">';
	for(var i = 0; i < 5; ++i) {
		str += '<li><a href="#">' + (i + 1) + '</a></li>';
	}
	str += '</ul>';
	str += '</nav>';

	$('#game').html(str);
}

//-----------------------------------------------------------------------

function sortData()
{
	var tmp = new Array();
	for(var i = 0; i < data.length; ++i) {
		if(data[i].path.length > 0) {
			tmp.push(data[i]);
		}
	}
	data = tmp;
}

//-----------------------------------------------------------------------

function showPage(number)
{
	var dataset = data[0];
	var randoms = [0,1,2,3];
	for(var i = 0; i < 100; ++i) {
		var pos1 = parseInt(Math.random() * 4);
		var pos2 = parseInt(Math.random() * 4);
		var tmp = randoms[pos1];
		randoms[pos1] = randoms[pos2];
		randoms[pos2] = tmp;
	}

	var navigation = $('.pagination').children();

	for(var i = 0; i < navigation.length; ++i) {
		var x = navigation.get(i);

		if(i == number) {
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

	var questions = $('#questions').children();
	questions.removeClass('list-group-item-success').removeClass('list-group-item-danger').addClass('list-group-item-info');
	$(questions.get(randoms[0])).html(dataset.text1);
	$(questions.get(randoms[1])).html(dataset.text2);
	$(questions.get(randoms[2])).html(dataset.text3);
	$(questions.get(randoms[3])).html(dataset.text4);
}

//-----------------------------------------------------------------------

$(document).ready(function() {
	installMenu();
	installEvents();
	installTimer();
//	recalcBoard();

	sortData();

	createPageGameCard();
	showPage(0);
});

//-----------------------------------------------------------------------
