var RequestPageView = Backbone.View.extend({
	
	className: 'pageInner',

	events: {
  	'submit #theform' : 'submitForm'
	},

	initialize: function() {
		this.render();
	},

	render: function() {
    $('#map-canvas').hide();
		var template =  $('#request-template').html();
		this.$el.html(template);
	},

	submitForm: function (event) {
		event.preventDefault();
    // alert("All done. Where's my box?");
    var confirm = new ConfirmPageView();
		$(".zombieContainer").html(confirm.el);
		$(".pageContainer").hide();

    // Get user zip
    var userZip = $('#zip').val();
    console.log(userZip);
    // Grab first two digits of user zip
    var twoDigits = userZip.substring(0, 2);
	  console.log(twoDigits);
    // Loop through array of zip categories and pair the entry with a rec center.
    	// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
    
    //Set up a loop:

    // for(i = 1; i < 10)

		// var arrayScan1 = rec1_zips.indexOf(twoDigits);
		// var arrayScan2 = rec2_zips.indexOf(twoDigits);
		// var arrayScan3 = rec3_zips.indexOf(twoDigits);
		// var arrayScan4 = rec4_zips.indexOf(twoDigits);
		// var arrayScan5 = rec5_zips.indexOf(twoDigits);
		// var arrayScan6 = rec6_zips.indexOf(twoDigits);
		// var arrayScan7 = rec7_zips.indexOf(twoDigits);
		// var arrayScan8 = rec8_zips.indexOf(twoDigits);
		// var arrayScan9 = rec9_zips.indexOf(twoDigits);
		// var arrayScan10 = rec10_zips.indexOf(twoDigits);

  //   console.log(arrayScan1);
  //   console.log(arrayScan2);
  //   console.log(arrayScan3);
  //   console.log(arrayScan4);
  //   console.log(arrayScan5);
  //   console.log(arrayScan6);
  //   console.log(arrayScan7);
  //   console.log(arrayScan8);
  //   console.log(arrayScan9);
  //   console.log(arrayScan10);

   	var arrayScan1 = _.indexOf(rec1_zips, twoDigits);
   	if (arrayScan1 !== -1){
      return console.log('Matched to rec1!');
    };
 		console.log(arrayScan1);

   	var arrayScan2 = _.indexOf(rec2_zips, twoDigits);
	   	if (arrayScan2 !== -1){
	      return console.log('Matched to rec2!');
    };
 		console.log(arrayScan2);

 		var arrayScan3 = _.indexOf(rec3_zips, twoDigits);
   	if (arrayScan3 !== -1){
      return console.log('Matched to rec3!');
    };
 		console.log(arrayScan3);

   	var arrayScan4 = _.indexOf(rec4_zips, twoDigits);
   	if (arrayScan4 !== -1){
      return console.log('Matched to rec4!');
    };
 		console.log(arrayScan4);

 		var arrayScan5 = _.indexOf(rec5_zips, twoDigits);
   	if (arrayScan5 !== -1){
      return console.log('Matched to rec5!');
    };
 		console.log(arrayScan5);

   	var arrayScan6 = _.indexOf(rec6_zips, twoDigits);
   	if (arrayScan6 !== -1){
      return console.log('Matched to rec6!');
    };
 		console.log(arrayScan6);

 		var arrayScan7 = _.indexOf(rec7_zips, twoDigits);
   	if (arrayScan7 !== -1){
      return console.log('Matched to rec7!');
    };
 		console.log(arrayScan7);

   	var arrayScan8 = _.indexOf(rec8_zips, twoDigits);
   	if (arrayScan8 !== -1){
      return console.log('Matched to rec8!');
    };
 		console.log(arrayScan8);

 		var arrayScan9 = _.indexOf(rec9_zips, twoDigits);
   	if (arrayScan9 !== -1){
      return console.log('Matched to rec9!');
    };
 		console.log(arrayScan9);

   	var arrayScan10 = _.indexOf(rec10_zips, twoDigits);
   	if (arrayScan10 !== -1){
      return console.log('Matched to rec10!');
    };
 		console.log(arrayScan10);

// DID NOT WORK
 		// var arrayScan = function() {
 		// 	_.indexOf(rec1_zips, twoDigits);
 		// 	_.indexOf(rec2_zips, twoDigits);
 		// 	_.indexOf(rec3_zips, twoDigits);
 		// };
 		// console.log(arrayScan);

		// while (arrayScan != -1) {

    // };


  }
    // Then I need move the map / zoom in on center and show info window.
})