    
var longjohns = '../images/longjohns_icon.png';

var shirt = '../images/lsshirt_icon.png';

var locations = [
    
    {
        name: 'rec1', 
        position: new google.maps.LatLng(29.865911,-95.566727),
        // map: map,
        title:"American Textile Recycling",
        icon: longjohns,
        content: 
        '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading"><a href="http://atrscorp.com" target="_blank">American Textile Recycling</a></h1>'+
            '<div id="bodyContent">'+
                '<p>10739 W Little York Rd #100, Houston, TX <br> (713) 856-6170</p>'+
            '</div>'+
        '</div>'
    }, {
        name: 'rec2', 
        position: new google.maps.LatLng(32.946979,-80.624673),
        // map: map,
        title:"Carolina Textile Recycling",
        icon: shirt,
        content: 
        '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading"><a href="https://plus.google.com/105428587463519345659/about?gl=us&hl=en" target="_blank">Carolina Textile Recycling</a></h1>'+
            '<div id="bodyContent">'+
                '<p>68 Anderson Rd, Walterboro, SC <br> (843) 538-8644</p>'+
            '</div>'+
        '</div>'
    },  {
        name: 'rec3', 
        position: new google.maps.LatLng(27.7692544,-82.6630569),
        // map: map,
        title:"Suncoast Textile Recycling",
        icon: longjohns,
        content: 
        '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading"><a href="https://plus.google.com/102660832478251858597/about?hl=en" target="_blank">Suncoast Textile Recycling</a></h1>'+
            '<div id="bodyContent">'+
                '<p>201 22nd St S, St Petersburg, FL <br> (727) 729-2862</p>'+
            '</div>'+
        '</div>'
    },  {
        name: 'rec4', 
        position: new google.maps.LatLng(38.6791963,-90.3947229),
        // map: map,
        title:"USAgain",
        icon: shirt,
        content: 
        '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading"><a href="http://www.usagain.com" target="_blank">USAgain</a></h1>'+
            '<div id="bodyContent">'+
                '<p>1113 N Warson Rd, St Louis, MO <br> (314) 291-0046</p>'+
            '</div>'+
        '</div>'
    },  {
        name: 'rec5', 
        position: new google.maps.LatLng(40.7914948,-73.1382576),
        // map: map,
        title:"Earthrite Textile Recycling",
        icon: longjohns,
        content: 
        '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading"><a href="https://plus.google.com/113257260254977162301/about?hl=en" target="_blank">Earthrite Textile Recycling</a></h1>'+
            '<div id="bodyContent">'+
                '<p>2073 5th Ave, Ronkonkoma, NY</p>'+
            '</div>'+
        '</div>'
    },  {
        name: 'rec6', 
        position: new google.maps.LatLng(42.19606,-71.75631),
        // map: map,
        title:"Millbury Textile Recycling",
        icon: shirt,
        content: 
        '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading"><a href="http://www.millburyrecycling.com/" target="_blank">Millbury Textile Recycling</a></h1>'+
            '<div id="bodyContent">'+
                '<p>4 Lincoln Ave, Millbury, MA <br> (508) 865-1717</p>'+
            '</div>'+
        '</div>'
    }, {
        name: 'rec7', 
        position: new google.maps.LatLng(44.050317,-91.6214551),
        // map: map,
        title:"Miller Waste Mills Inc",
        icon: longjohns,
        content: 
        '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading"><a href="http://www.millerwastemills.com/" target="_blank">Miller Waste Mills Inc</a></h1>'+
            '<div id="bodyContent">'+
                '<p>580 E Front St, Winona, MN <br> (507) 454-6906</p>'+
            '</div>'+
        '</div>'
    }, {
        name: 'rec8', 
        position: new google.maps.LatLng(47.8487843,-122.2389721),
        // map: map,
        title:"Retex",
        icon: shirt,
        content: 
        '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading"><a href="http://www.retexnorthwest.com/" target="_blank">Retex</a></h1>'+
            '<div id="bodyContent">'+
                '<p>412 164th St SW, Lynnwood, WA 98087</p>'+
            '</div>'+
        '</div>'
    }, {
        name: 'rec9', 
        position: new google.maps.LatLng(37.7756117,-122.4179582),
        // map: map,
        title:"San Francisco Department of the Environment",
        icon: longjohns,
        content: 
        '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading"><a href="http://www.sfenvironment.org/" target="_blank">San Francisco Department of the Environment</a></h1>'+
            '<div id="bodyContent">'+
                '<p>1455 E Market St #1200, San Francisco, CA 94103</p>'+
            '</div>'+
        '</div>'    
    }, {
        name: 'rec10', 
        position: new google.maps.LatLng(32.552842,-117.052538),
        // map: map,
        title:"A & E Textile Recovery",
        icon: shirt,
        content: 
        '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading"><a href="http://aetextilerecovery.com/" target="_blank">A & E Textile Recovery</a></h1>'+
            '<div id="bodyContent">'+
                '<p>2365 Via Segundo, San Diego, CA 92173</p>'+
            '</div>'+
        '</div>'    
    } 
]




//make array of 10 objects to 
var rec1_zips = ['39', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79']

var rec2_zips = ['27', '28', '29', '30', '31', '35', '36', '37', '38']

var rec3_zips = ['32', '33', '34']

var rec4_zips = ['40', '41', '42', '43', '44', '45', '46', '47', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69']

var rec5_zips = ['07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26']

var rec6_zips = ['00', '01', '02', '03', '04', '05', '06']

var rec7_zips = ['48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59']

var rec8_zips = ['82', '83', '97', '98', '99']

var rec9_zips = ['84', '89', '93', '94', '95', '96']

var rec10_zips = ['80', '81', '85', '86', '87', '88', '90', '91', '92']

//underscore 'indexof' tells you where in array the match is found

//Tim's method
// var zips = [
// 	{rec1_zips: [39, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]},
// 	{rec2_zips: [27, 28, 29, 30, 31, 35, 36, 37, 38]},
// 	{rec3_zips: [32, 33, 34]},
// 	{rec4_zips: [40, 41, 42, 43, 44, 45, 46, 47, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69]},
// 	{rec5_zips: [07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]},
// 	{rec6_zips: [00, 01, 02, 03, 04, 05, 06]},
// 	{rec7_zips: [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]},
// 	{rec8_zips: [82, 83, 97, 98, 99]},
// 	{rec9_zips: [84, 89, 93, 94, 95, 96]},
// 	{rec10_zips: [80, 81, 85, 86, 87, 88, 90, 91, 92]}
// ];


// _.each(zips, function (z) {
//   _.each(z, function (a) {
//     if (a.indexOf(45) !== -1){
//       return console.log(z);
//     }
//   });
// });

(function( $ ) {
	var requests = {};
	var zipValid = {
		us: /[0-9]{5}(-[0-9]{4})?/
	};

	$.ziptastic = function(country, zip, callback){
		// If only zip and callback are given default to US
		if (arguments.length == 2 && typeof arguments[1] == 'function') {
			callback = arguments[1];
			zip = arguments[0];
			country = 'US';
		}

		country = country.toUpperCase();
		// Only make unique requests
		if(!requests[country]) {
			requests[country] = {};
		}
		if(!requests[country][zip]) {
			requests[country][zip] = $.getJSON('http://zip.getziptastic.com/v2/' + country + '/' + zip);
		}

		// Bind to the finished request
		requests[country][zip].done(function(data) {
			if (typeof callback == 'function') {
				callback(data.country, data.state_short, data.city, zip);
			}
		});

		// Allow for binding to the deferred object
		return requests[country][zip];
	};

	$.fn.ziptastic = function( options ) {
		return this.each(function() {
			var ele = $(this);

			ele.on('keyup', function() {
				var zip = ele.val();

				// TODO Non-US zip codes?
				if(zipValid.us.test(zip)) {
					// Deleted state param below?? -LP//////////////////////////////////////////////
					$.ziptastic(zip, function(country, state_short, city) {
						// Trigger the updated information
						// Deleted state param below?? -LP//////////////////////////////////////////////
						ele.trigger('zipChange', [country, state_short, city, zip]);
					});
				}
			});
		});
	};
})( jQuery );

var HomePageView = Backbone.View.extend({
	
	className: 'pageInner',

	events: {
  	'click #request_btn' : 'requestBox'
	},

	initialize: function() {
		this.render();
	},

	render: function() {
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
	      // NOT WORKING: REPURPOSING INFO WINDOW FUNCTION
	   //    var autoInfo = (locations, function (data) {
	   //     	var marker = new google.maps.Marker({
	   //          position: new google.maps.LatLng(32.946979,-80.624673),
	   //          map: map,
	   //          title: data.title,
	   //          icon: data.icon
	   //      });
	   //     	console.log(marker);

	   //     	var infowindow = new google.maps.InfoWindow({
	   //         content: data.content
	   //      });
	      
	   //    	// google.maps.event.addListener(marker, 'click', function () {
    //         infowindow.open(map, marker);
    //     	// })
				// });

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

    // _.each(zips, function (z) {
//   _.each(z, function (a) {
//     if (a.indexOf(45) !== -1){
//       return console.log(z);
//     }
//   });
// });
  }
    // Then I need move the map / zoom in on center and show info window.
})
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
// Instance of Home Page
var home = new HomePageView();
$(".pageContainer").html(home.el);

// Instance of Request Page
// var request = new RequestPageView();
// $(".pageContainer").html(request.el);

// Instance of Confirm Page
// var confirm = new ConfirmPageView();
// $(".pageContainer").html(confirm.el);


// ZIPTASTIC FORM PLUGIN ///////////////////////////////////////////////////////////////////////
var formPlugin = function() {
// (function($) {
//     $(function() {
        var duration = 500;

        var elements = {
            country: $('#country'),
            state_short: $('#state-short'),
            city: $('#city'),
            zip: $('#zip'),
            street: $('#street'),
            first: $('#first-name'),
            last: $('#last-name'),
            phone: $('#phone'),
            email: $('#email')
        }

        // Initially hide the city/state/country
        elements.country.parent().hide();
        elements.state_short.parent().hide();
        elements.city.parent().hide();

        //Hiding additional fields added above -LP/////////////////////////////////////////
        elements.street.parent().hide();
        elements.first.parent().hide();
        elements.last.parent().hide();
        elements.phone.parent().hide();
        elements.email.parent().hide();


        // Initialize the ziptastic and bind to the change of zip code
        elements.zip.ziptastic()
            //Calling additional params below -LP/////////////////////////////////////////
            .on('zipChange', function(evt, country, state_short, city, zip, street, first, last, phone, email) {
                // Country
                elements.country.val(country).parent().show(duration);

                // State
                elements.state_short.val(state_short).parent().show(duration);

                // City
                elements.city.val(city).parent().show(duration);

                //Showing additional fields added above -LP////////////////////////////////// 
                elements.street.val(street).parent().show();
                elements.first.val(first).parent().show();
                elements.last.val(last).parent().show();
                elements.phone.val(phone).parent().show();
                elements.email.val(email).parent().show();
            });
//     });
// }(jQuery));
};

// SUBMIT FORM MATCH + ZOOM  /////////////////////////////////////////////////////////////////////////////

    //Function to run through zip arrays and zoom in on map.
    // $('#theform').on('submit', function () {
    //     alert("I'm clicked");
    //     var userZip = $('#zip').val();
    //     console.log(userZip);
    // });
// GOOGLE MAP  /////////////////////////////////////////////////////////////////////////////

// An object literal to hold a number of map properties.
function initialize() {
    // Added below for styled map??????????????????
    var styles = [
      {
        featureType: '',
        elementType: '',
        stylers: [
          {hue: '#F2F0E6'},
          {saturation: '-80'},
          {lightness: ''},
        ]
      }
    ];

    var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});

    var mapOptions = {
        center: new google.maps.LatLng(39.091919,-94.5757195),
        zoom: 4,
        //Prevents zoom on scroll
        scrollwheel: false,
        //Next 3 controllers look distorted when rendered
        panControl: false,
        zoomControl: false,
        streetViewControl: false
        // mapTypeControl: false,
        // scaleControl: false,
        // overviewMapControl: false
    };

    // A "map" object, passing it the div element and the map properties.
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);


    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    
    _.each(locations, function (data) {
        
        var marker = new google.maps.Marker({
            position: data.position,
            map: map,
            title: data.title,
            icon: data.icon
        });
        
        var infowindow = new google.maps.InfoWindow({
            content: data.content
        });
        
        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        })
        
    });

}

google.maps.event.addDomListener(window, 'load', initialize);

// END OF GOOGLE MAP ///////////////////////////////////////////////////////////////////////

// ZIP MATCH FUNCTION ///////////////////////////////////////////////////////////////////////
// var zipMatch = function() {
//     // var userZip = $('#zip').val();
//     // console.log(userZip);
//     // I need to grab the first two digits of userZip
//     // var twoDigits = $(this).attr("title").substr(0, 2);
//     var twoDigits = $('userZip').substr(0, 2);
//     console.log('twoDigits');
// };


