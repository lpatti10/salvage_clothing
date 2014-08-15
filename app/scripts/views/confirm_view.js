var ConfirmPageView = Backbone.View.extend({
	
	className: 'pageInner',

	events: {
  	//none?
	},

	initialize: function() {
		this.render();
		// this.render('initialize()', 2000);
		// onLoad="setTimeout('initialize()', 2000);"
	},

	render: function() {
		
		// var template = Handlebars.compile($('#confirm-template').html());
		// this.$el.html(rendered);

		//Testing hiding default map = SUCCESS!
		$('#map-canvas').hide();

		// need an "if" (this) then "show" (this map) statement 
		//to match result map 1-10 to array match!!!!!!!!!!!!!!!!!!!!

		$('#map-canvas1').show();
		// $('#map-canvas2').show();
		// $('#map-canvas3').show();
		// $('#map-canvas4').show();
		// $('#map-canvas5').show();
		// $('#map-canvas6').show();
		// $('#map-canvas7').show();
		// $('#map-canvas8').show();
		// $('#map-canvas9').show();
		// $('#map-canvas10').show();

		var template =  $('#confirm-template').html();
		this.$el.html(template);
		

		
	},

})