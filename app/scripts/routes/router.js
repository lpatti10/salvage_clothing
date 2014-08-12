var PageRouter = Backbone.Router.extend({
	
	routes: {
		"": "home_page",
		"request": "request_page",
		"confirm": "confirm_page"
	},

	initialize: function() {
		this.appView = new App.View();
	},

	home_page: function() {
		var homeView = new HomePageView();
		this.appView.showView(homeView);
		// $(".page").hide();
		// $('#home').show();
	},

	request_page: function() {
		var requestView = new RequestPageView(); // 
		this.appView.showView(requestView);
		// $(".page").hide();
		// $('#request').show();
	},

	confirm_page: function() {
		var confirmView = new ConfirmPageView();
		this appView.showView(confirmView);
		// $(".page").hide();
		// $('#confirm').show();
	}

});

new PageRouter();

Backbone.history.start();