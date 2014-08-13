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
			event.preventDefault();
      alert("All done. Where's my box?");
      var confirm = new ConfirmPageView();
			$(".zombieContainer").html(confirm.el);
			$(".pageContainer").hide();
      // var userZip = this.get($('#zip').val());
      // console.log(userZip);
   }

})