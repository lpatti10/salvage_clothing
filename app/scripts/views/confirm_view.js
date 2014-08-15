var ConfirmPageView = Backbone.View.extend({
	
	className: 'pageInner',

	events: {
  	//none?
	},

	initialize: function() {
		this.render();

	},

	render: function() {
		// this.render('initialize()', 2000);
		// onLoad="setTimeout('initialize()', 2000);"

			// var template = Handlebars.compile($('#confirm-template').html());
			// this.$el.html(rendered);
			// $('#map-canvas1').css({'height':'100%'});

			// function displayMap() {
   //        document.getElementById('map_canvas1').style.display="block";
   //        initialize();
   //    }

		// $('#map-canvas1').css({'display':'block'});
		
			// $('#map-canvas').hide();  	var arrayScan1 = _.indexOf(rec1_zips, twoDigits);
   

    $('#map-canvas1').css({'visibility':'visible', 'height':'100%'});


			


			// need an "if" (this) then "show" (this map) statement 
			//to match result map 1-10 to array match!!!!!!!!!!!!!!!!!!!!

			// $('#map-canvas1').css({'visibility':'visible'});
			// $('#map-canvas2').css({'visibility':'visible'});
			// $('#map-canvas3').css({'visibility':'visible'});
			// $('#map-canvas4').css({'visibility':'visible'});
			// $('#map-canvas5').css({'visibility':'visible'});
			// $('#map-canvas6').css({'visibility':'visible'});
			// $('#map-canvas7').css({'visibility':'visible'});
			// $('#map-canvas8').css({'visibility':'visible'});
			// $('#map-canvas9').css({'visibility':'visible'});
			// $('#map-canvas10').css({'visibility':'visible'});

			var template =  $('#confirm-template').html();
			this.$el.html(template);
			
	},
})