var RequestPageView = Backbone.View.extend({
	
	className: 'pageInner',

	events: {
  	'submit #theform' : 'submitForm',
	},

	initialize: function() {
		this.render();
	},

	render: function() {
   
    // var pos = $(window).scrollTop();

    $('#map-canvas').hide();
		var template =  $('#request-template').html();
		this.$el.html(template);

    $('body').animatescroll(); 
	},

	submitForm: function (event) {
		event.preventDefault();
    // alert("All done. Where's my box?");
    var confirm = new ConfirmPageView();
		$(".zombieContainer").html(confirm.el);
		$(".pageContainer").hide();
    
    // Get user first name
    // var userName = $('#first-name').val();
    // console.log(userName);

    // Get user zip
    var userZip = $('#zip').val();
    // console.log(userZip);
    // Grab first two digits of user zip
    var twoDigits = userZip.substring(0, 2);
	  // console.log(twoDigits)
  }

  // scrollTop: function (event) {
  //   $('.sticky').ScrollTo({
  //     duration: 2000,
  //     durationMode: 'all'
  //   });
  // }
})