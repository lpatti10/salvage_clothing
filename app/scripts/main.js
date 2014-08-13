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



