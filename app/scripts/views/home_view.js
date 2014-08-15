var HomePageView = Backbone.View.extend({
	
	className: 'pageInner',

	events: {
  	'click #request_btn' : 'requestBox'
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		$('#map-canvas1').hide();
		$('#map-canvas2').hide();
		$('#map-canvas3').hide();
		$('#map-canvas4').hide();
		$('#map-canvas5').hide();
		$('#map-canvas6').hide();
		$('#map-canvas7').hide();
		$('#map-canvas8').hide();
		$('#map-canvas9').hide();
		$('#map-canvas10').hide();

		var template =  $('#home-template').html();
		this.$el.html(template);
	},

	requestBox: function (event) {
	 	// alert("Send me a box");
	 	event.preventDefault();
	 	var request = new RequestPageView();
		$(".pageContainer").html(request.el);
		formPlugin();
	}
	


})


