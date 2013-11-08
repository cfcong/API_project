$(function() {
	//run the query (pull data from feed)
	var dataUrl = 'http://autocomplete.wunderground.com/aq?query=';
	var searchBar;
	var cityUrl = 'http://api.wunderground.com/api/55f52aa00e54da0f/forecast';
	//1)On click of button:
	$('#searchNow').click(function() {
	//a)Get the string typed in by the user (Alert/Console.log it so we can make sure our 
	//variable has the data)
		var searchBar = $('#searchBar').val();

		$.getJSON(dataUrl + searchBar + '&cb=?',

			function(json){
				//console.log(json);
				//var results = json["RESULTS"];
				$.each(json.RESULTS, function (i, outcome) {
				/*for(var i = 0; i < results.length; i++){
					var city = results[i];
					var li = $('<li></li>');
					li.attr('cityInfo', city['l']);
					li.append('<div>' + city['name'] + '</div>');*/
					var li = $('<li>' + outcome.name + '</li>');
					li.attr('cityInfo', outcome.l);
					$('#entrylist').append(li);
					//console.log(outcome);
					$('#searchBar').val(' ');
					/*$('<li>' + city['name'] + '</li>').click(function(){
						//val urlDetail = 'http://api.wunderground.com/api/55f52aa00e54da0f/forecast/q/' ;
						//$.getJSON(urlDetail + city['zmw'] + '.json',
							//function(json){

							//}	
						//)
					});*/
				});
			}
		)
		$('ul#entrylist').on('click','li', function() {
			var cityWeather = $(this).attr('cityInfo');
			/*$.getJSON(cityUrl + cityWeather + '.json?cb=?',

				function(json){
					console.log(json);
				}
			)*/
		    $.ajax({
		    	url: cityUrl + cityWeather + '.json',
		    	dataType: 'jsonp',
		    	success: function(json) {
		    		console.log(json);
		    		$('#entrylist').hide();
		    		var x = json["forecast"]["simpleforecast"]["forecastday"];
		    		$.each(var x, function(i){
		    			
		    		}
		    		}
		    	}
		    });
		});				
	});
});		
//0)Examine the JSON response from the Autocomplete API (Paste the URL in a tab in Chrome)
//On click of button:
//	-identify how you will grab the data from here
//  -identify how you will do callback=? for JSONP ('cb')
//     -Issue: cb != callback and we need to see how jQuery can 
//1)On click of button:
	//a)Get the string typed in by the user (Alert/Console.log it so we can make sure our 
	//variable has the data)
	//b)get Json results of cities using the value from the user 
  //http://autocomplete.wunderground.com/aq?query=<variable> -> data
		//On success of that, capture the data in a variable. (Aagain, console.log
		//it to see it before you move on. This is a good opportunity to examine 
		//the data in Chrome Console)
//consult the jsFiddle we did today for how to construct html and add it to the body