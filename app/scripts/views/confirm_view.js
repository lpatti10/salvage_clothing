var ConfirmPageView = Backbone.View.extend({
	
	className: 'pageInner',

	events: {
  	//none?
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		//Testing hiding default map = SUCCESS!
		$('#map-canvas').hide();
		$('#map-canvas2').show();
		var template =  $('#confirm-template').html();
		this.$el.html(template);
		
		//Repeating map function here as resulting zoom:



	},

})