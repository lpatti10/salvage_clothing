    
var longjohns = '../images/longjohns_icon.png';

var shirt = '../images/lsshirt_icon.png';

var locations = [
    
    {
        name: 'rec1', 
        position: new google.maps.LatLng(29.865911,-95.566727),
        // map: map,
        title:"American Textile Recycling Services",
        icon: longjohns,
        content: 
        '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">American Textile Recycling Services</h1>'+
            '<div id="bodyContent">'+
                '<p>Description here...</p>'+
                '<p>Link title... <a href="#"</a></p>'+
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
            '<h1 id="firstHeading" class="firstHeading">Carolina Textile Recycling</h1>'+
            '<div id="bodyContent">'+
                '<p>Description here...</p>'+
                '<p>Link title... <a href="#"</a></p>'+
            '</div>'+
        '</div>'
    },  {
        name: 'rec3', 
        position: new google.maps.LatLng(27.7692544,-82.6630569),
        // map: map,
        title:"Suncoast Textile Recycling Corporation",
        icon: longjohns,
        content: 
        '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">Suncoast Textile Recycling Corporation</h1>'+
            '<div id="bodyContent">'+
                '<p>Description here...</p>'+
                '<p>Link title... <a href="#"</a></p>'+
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
            '<h1 id="firstHeading" class="firstHeading">USAgain</h1>'+
            '<div id="bodyContent">'+
                '<p>Description here...</p>'+
                '<p>Link title... <a href="#"</a></p>'+
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
            '<h1 id="firstHeading" class="firstHeading">Earthrite Textile Recycling</h1>'+
            '<div id="bodyContent">'+
                '<p>Description here...</p>'+
                '<p>Link title... <a href="#"</a></p>'+
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
            '<h1 id="firstHeading" class="firstHeading">Millbury Textile Recycling</h1>'+
            '<div id="bodyContent">'+
                '<p>Description here...</p>'+
                '<p>Link title... <a href="#"</a></p>'+
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
            '<h1 id="firstHeading" class="firstHeading">Miller Waste Mills Inc</h1>'+
            '<div id="bodyContent">'+
                '<p>Description here...</p>'+
                '<p>Link title... <a href="#"</a></p>'+
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
            '<h1 id="firstHeading" class="firstHeading">Retex</h1>'+
            '<div id="bodyContent">'+
                '<p>Description here...</p>'+
                '<p>Link title... <a href="#"</a></p>'+
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
            '<h1 id="firstHeading" class="firstHeading">San Francisco Department of the Environment</h1>'+
            '<div id="bodyContent">'+
                '<p>Description here...</p>'+
                '<p>Link title... <a href="#"</a></p>'+
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
            '<h1 id="firstHeading" class="firstHeading">A & E Textile Recovery</h1>'+
            '<div id="bodyContent">'+
                '<p>Description here...</p>'+
                '<p>Link title... <a href="#"</a></p>'+
            '</div>'+
        '</div>'    
    } 
]




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
		//$(this).trigger(formPlugin); ?????????????
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
      // var userZip = this.get($('#zip').val());
      // console.log(userZip);
   }

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



