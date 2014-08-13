var ConfirmPageView = Backbone.View.extend({
	
	className: 'pageInner',

	events: {
  	//none?
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		var template =  $('#confirm-template').html();
		this.$el.html(template);
		
		//zoom on map's match????????????
	},

})