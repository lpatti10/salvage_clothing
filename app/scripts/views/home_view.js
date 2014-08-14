var HomePageView = Backbone.View.extend({
	
	className: 'pageInner',

	events: {
  	'click #request_btn' : 'requestBox'
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		// $('#map-canvas2').hide();
		var template =  $('#home-template').html();
		this.$el.html(template);
	},

	requestBox: function (event) {
	 	alert("Send me a box");
	 	var request = new RequestPageView();
		$(".pageContainer").html(request.el);
		formPlugin();
	}
	


})


