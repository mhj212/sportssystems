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


	$.getJSON('menu3.json', function(data){
		console.log(data);
		$.each(data, function (i, data2){
			if (data2.parentID == -1){
				$('nav').append("<a class='"+data2.name+"class' href='#'>"+data2.name+"</a>");
				
				$('nav').after("<div class='"+data2.name+"dropdown' style='display:none;'></div");
				
			}
			if (data2.parentID == 1){
				$('.Homedropdown').append("<a href='#'>"+data2.name+"</a>");
			}
			if (data2.parentID == 5){
				$(".Reportsdropdown").append("<a href='#'>"+data2.name+"</a>");
			}
			if (data2.parentID == 9){
				$(".Statusdropdown").append("<a href='#'>"+data2.name+"</a>");
			}

		});
	}).done(function(){
		$('.Homeclass').click(function(){
			$('.Homedropdown').toggle();
			$('.Reportsdropdown').hide();
			$('.Statusdropdown').hide();
		});
		$('.Reportsclass').click(function(){
			$('.Reportsdropdown').toggle();
			$('.Homedropdown').hide();
			$('.Statusdropdown').hide();
		});
		$('.Statusclass').click(function(){
			$('.Statusdropdown').toggle();
			$('.Homedropdown').hide();
			$('.Reportsdropdown').hide();
		});

		$(".Helpclass, .Logoutclass").click(function(){
			$('.Statusdropdown').hide();
			$('.Homedropdown').hide();
			$('.Reportsdropdown').hide();
		});
	});



});