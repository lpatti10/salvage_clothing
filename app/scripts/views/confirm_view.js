var ConfirmPageView = Backbone.View.extend({
	
	className: 'pageInner',

	events: {
  	//none?
	},

	initialize: function() {
		this.render();

	},

	render: function() {
 	
 		// var pos = $(window).scrollTop();

    var userName = $('#first-name').val();
    console.log(userName);
    // Get user zip
    var userZip = $('#zip').val();
    console.log(userZip);
    // Grab first two digits of user zip
    var twoDigits = userZip.substring(0, 2);
	  console.log(twoDigits);

	  var arrayScan1 = _.indexOf(rec1_zips, twoDigits);
	   	if (arrayScan1 !== -1){
	      console.log('Matched to rec1!');
	      document.getElementById('map-canvas1').style.display="block";
		  	initialize();
    };
 		console.log(arrayScan1);

	 	var arrayScan2 = _.indexOf(rec2_zips, twoDigits);
	   	if (arrayScan2 !== -1){
	      console.log('Matched to rec2!');
	      document.getElementById('map-canvas2').style.display="block";
		  	initialize();
    };
 		console.log(arrayScan2);

	 	var arrayScan3 = _.indexOf(rec3_zips, twoDigits);
	   	if (arrayScan3 !== -1){
	      console.log('Matched to rec3!');
	      document.getElementById('map-canvas3').style.display="block";
		  	initialize();
    };
 		console.log(arrayScan3);

 		 var arrayScan4 = _.indexOf(rec4_zips, twoDigits);
	   	if (arrayScan4 !== -1){
	      console.log('Matched to rec4!');
	      document.getElementById('map-canvas4').style.display="block";
		  	initialize();
    };
 		console.log(arrayScan4);

 		var arrayScan5 = _.indexOf(rec5_zips, twoDigits);
	   	if (arrayScan5 !== -1){
	      console.log('Matched to rec5!');
	      document.getElementById('map-canvas5').style.display="block";
		  	initialize();
    };
 		console.log(arrayScan5);

 		var arrayScan6 = _.indexOf(rec6_zips, twoDigits);
	   	if (arrayScan6 !== -1){
	      console.log('Matched to rec6!');
	      document.getElementById('map-canvas6').style.display="block";
		  	initialize();
    };
 		console.log(arrayScan6);

 		var arrayScan7 = _.indexOf(rec7_zips, twoDigits);
	   	if (arrayScan7 !== -1){
	      console.log('Matched to rec7!');
	      document.getElementById('map-canvas7').style.display="block";
		  	initialize();
    };
 		console.log(arrayScan7);

 		var arrayScan8 = _.indexOf(rec8_zips, twoDigits);
	   	if (arrayScan8 !== -1){
	      console.log('Matched to rec8!');
	      document.getElementById('map-canvas8').style.display="block";
		  	initialize();
    };
 		console.log(arrayScan8);

 		var arrayScan9 = _.indexOf(rec9_zips, twoDigits);
	   	if (arrayScan9 !== -1){
	      console.log('Matched to rec9!');
	      document.getElementById('map-canvas9').style.display="block";
		  	initialize();
    };
 		console.log(arrayScan9);

 		var arrayScan10 = _.indexOf(rec10_zips, twoDigits);
	   	if (arrayScan10 !== -1){
	      console.log('Matched to rec10!');
	      document.getElementById('map-canvas10').style.display="block";
		  	initialize();
    };
 		console.log(arrayScan10);

	 	// document.getElementById('map-canvas1').style.display="block";
	  // initialize();

	 	// document.getElementById('map-canvas2').style.display="block";
	  // initialize();

	  // document.getElementById('map-canvas3').style.display="block";
	  // initialize();

	 	// document.getElementById('map-canvas4').style.display="block";
	  // initialize();

	 	// document.getElementById('map-canvas5').style.display="block";
	  // initialize();

	  // document.getElementById('map-canvas6').style.display="block";
	  // initialize();

	  // document.getElementById('map-canvas7').style.display="block";
	  // initialize();

	 	// document.getElementById('map-canvas8').style.display="block";
	  // initialize();

	 	// document.getElementById('map-canvas9').style.display="block";
	  // initialize();

	  // document.getElementById('map-canvas10').style.display="block";
	  // initialize();

// WORKS WITHOUT NAME PERSONALIZATION
		// var template =  $('#confirm-template').html();
		// this.$el.html(template);

	var template = Handlebars.compile($('#confirm-template').html());
	var rendered = template({firstName:userName});
	this.$el.html(rendered);

	$('body').animatescroll(); 
		
	},
})