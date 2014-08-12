var RequestPageView = Backbone.View.extend({
	
	className: 'pageInner',

	events: {
  	'submit #theform' : 'submitForm'
	},

	initialize: function() {
		this.render();
	},

	render: function() {
		var template =  $('#request-template').html();
		this.$el.html(template);
	},

	submitForm: function (event) {
      alert("All done. Where's my box?");
      var confirm = new ConfirmPageView();
			$(".pageContainer").html(confirm.el);
      // var userZip = this.get($('#zip').val());
      // console.log(userZip);
   }

})