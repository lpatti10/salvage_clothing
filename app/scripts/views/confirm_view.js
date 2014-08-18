var ConfirmPageView = Backbone.View.extend({
	
	className: 'pageInner',

	events: {
  	//none?
	},

	initialize: function() {
		this.render();

	},

	render: function() {

	 	document.getElementById('map-canvas1').style.display="block";
	  initialize();

	 	document.getElementById('map-canvas2').style.display="block";
	  initialize();

	  document.getElementById('map-canvas3').style.display="block";
	  initialize();

	 	document.getElementById('map-canvas4').style.display="block";
	  initialize();

	 	document.getElementById('map-canvas5').style.display="block";
	  initialize();

	  document.getElementById('map-canvas6').style.display="block";
	  initialize();

	  document.getElementById('map-canvas7').style.display="block";
	  initialize();

	 	document.getElementById('map-canvas8').style.display="block";
	  initialize();

	 	document.getElementById('map-canvas9').style.display="block";
	  initialize();

	  document.getElementById('map-canvas10').style.display="block";
	  initialize();


	  //WORKS HALF-WAY??????????????
		// $('#map-canvas1').css({'visibility':'visible', 'height':'100%'});


			// need an "if" (this) then "show" (this map) statement 
			//to match result map 1-10 to array match!!!!!!!!!!!!!!!!!!!!



			var template =  $('#confirm-template').html();
			this.$el.html(template);
			
	},
})