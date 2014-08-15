var HomePageView = Backbone.View.extend({
	
	className: 'pageInner',

	events: {
  	'click #request_btn' : 'requestBox'
	},

	initialize: function() {
		this.render();
	},

	render: function() {

		// $('#map-canvas1').css({'display':'none'});

//Works but doesn't load fully on reset to 100%
		// $('#map-canvas1').css({'height':'0px'});
		// $('#map-canvas2').css({'height':'0px'});
		// $('#map-canvas3').css({'height':'0px'});
		// $('#map-canvas4').css({'height':'0px'});
		// $('#map-canvas5').css({'height':'0px'});
		// $('#map-canvas6').css({'height':'0px'});
		// $('#map-canvas7').css({'height':'0px'});
		// $('#map-canvas8').css({'height':'0px'});
		// $('#map-canvas9').css({'height':'0px'});
		// $('#map-canvas10').css({'height':'0px'});



//Works but doesn't load fully on reset to 100%
		$('#map-canvas1').css({'visibility':'hidden', 'height':'0px'});
		$('#map-canvas2').css({'visibility':'hidden', 'height':'0px'});
		$('#map-canvas3').css({'visibility':'hidden', 'height':'0px'});
		$('#map-canvas4').css({'visibility':'hidden', 'height':'0px'});
		$('#map-canvas5').css({'visibility':'hidden', 'height':'0px'});
		$('#map-canvas6').css({'visibility':'hidden', 'height':'0px'});
		$('#map-canvas7').css({'visibility':'hidden', 'height':'0px'});
		$('#map-canvas8').css({'visibility':'hidden', 'height':'0px'});
		$('#map-canvas9').css({'visibility':'hidden', 'height':'0px'});
		$('#map-canvas10').css({'visibility':'hidden', 'height':'0px'});

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


