$(document).ready(function(){


	$('nav a').on('click', function(e){
		e.preventDefault();
		var href = $(this).attr('href');
		console.log('href:' + href);
		renderPage(href);
	});

	function renderPage(hrefInput){
		$.ajax({
			url: hrefInput,
			type: "GET",
			dataType: 'text',
			success: function (response){
				console.log('page was loaded', response);
				$('.content').html(response);
			},
			error: function (error){
				console.log('page was not loaded', error);
			}
		});
	}

});