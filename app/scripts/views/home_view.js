var HomePageView = Backbone.View.extend({
	
	className: 'pageInner',

	events: {
  	'click #request_btn' : 'requestBox'
	},

	initialize: function() {
		this.render();
	},

	render: function() {

	$('#map-canvas1').css({'display':'none'});
	$('#map-canvas2').css({'display':'none'});
	$('#map-canvas3').css({'display':'none'});
	$('#map-canvas4').css({'display':'none'});
	$('#map-canvas5').css({'display':'none'});
	$('#map-canvas6').css({'display':'none'});
	$('#map-canvas7').css({'display':'none'});
	$('#map-canvas8').css({'display':'none'});
	$('#map-canvas9').css({'display':'none'});
	$('#map-canvas10').css({'display':'none'});


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


