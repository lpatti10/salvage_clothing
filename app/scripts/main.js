// ZIPTASTIC FORM PLUGIN ///////////////////////////////////////////////////////////////////////

(function($) {
    $(function() {
        var duration = 500;

        var elements = {
            country: $('#country'),
            state_short: $('#state-short'),
            city: $('#city'),
            zip: $('#zip'),
            //Additional fields I'm adding to form -LP
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
    });
}(jQuery));


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

    // Custom marker icon variables
    var longjohns = '../images/longjohns_icon.png';
    var shirt = '../images/lsshirt_icon.png';
    var zipup = '../images/zipup_icon.png';
    
    // Plotted recovery center variables "object locations as an array of objs. to loop"
    // var rec1 = new google.maps.LatLng(29.865911,-95.566727); 
    var rec2 = new google.maps.LatLng(32.946979,-80.624673); 
    var rec3 = new google.maps.LatLng(27.7692544,-82.6630569);
    var rec4 = new google.maps.LatLng(38.6791963,-90.3947229); 
    var rec5 = new google.maps.LatLng(40.7914948,-73.1382576); 
    var rec6 = new google.maps.LatLng(42.19606,-71.75631); 
    var rec7 = new google.maps.LatLng(44.050317,-91.6214551); 
    var rec8 = new google.maps.LatLng(47.8487843,-122.2389721); 
    var rec9 = new google.maps.LatLng(37.7756117,-122.4179582); 
    var rec10 = new google.maps.LatLng(32.552842,-117.052538); 
    
    // Plotted recovery center markers 
    // var rec1_marker = new google.maps.Marker({
    //     position: rec1,
    //     map: map,
    //     title:"American Textile Recycling Services",
    //     icon: longjohns
    // });

    var rec2_marker = new google.maps.Marker({
        position: rec2,
        map: map,
        title:"Carolina Textile Recycling",
        icon: shirt
    });

    var rec3_marker = new google.maps.Marker({
        position: rec3,
        map: map,
        title:"Suncoast Textile Recycling Corporation",
        icon: longjohns
    });
    
    var rec4_marker = new google.maps.Marker({
        position: rec4,
        map: map,
        title:"USAgain",
        icon: shirt
    });

    var rec5_marker = new google.maps.Marker({
        position: rec5,
        map: map,
        title:"Earthrite Textile Recycling",
        icon: longjohns
    });

    var rec6_marker = new google.maps.Marker({
        position: rec6,
        map: map,
        title:"Millbury Textile Recycling",
        icon: shirt
    });

    var rec7_marker = new google.maps.Marker({
        position: rec7,
        map: map,
        title:"Miller Waste Mills Inc",
        icon: longjohns
    });

    var rec8_marker = new google.maps.Marker({
        position: rec8,
        map: map,
        title:"Retex",
        icon: shirt
    });

    var rec9_marker = new google.maps.Marker({
        position: rec9,
        map: map,
        title:"San Francisco Department of the Environment",
        icon: longjohns
    });

    var rec10_marker = new google.maps.Marker({
        position: rec10,
        map: map,
        title:"A & E Textile Recovery",
        icon: shirt
    });

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    // Info window pop-ups
    // var contentString = '<div id="content">'+
    //     '<div id="siteNotice">'+
    //     '</div>'+
    //     '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
    //     '<div id="bodyContent">'+
    //     '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    //     'sandstone rock formation in the southern part of the '+
    //     'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
    //     'south west of the nearest large town, Alice Springs; 450&#160;km '+
    //     '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
    //     'features of the Uluru - Kata Tjuta National Park. Uluru is '+
    //     'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
    //     'Aboriginal people of the area. It has many springs, waterholes, '+
    //     'rock caves and ancient paintings. Uluru is listed as a World '+
    //     'Heritage Site.</p>'+
    //     '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    //     'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
    //     '(last visited June 22, 2009).</p>'+
    //     '</div>'+
    //     '</div>';

      // var infowindow = new google.maps.InfoWindow({
      //     content: contentString
      // });
    
 // EXPERIMENTAL   
    _.each(locations, function (data) {
    
    new google.maps.Marker({
        position: data.position,
        map: map,
        title: data.title,
        icon: data.icon
    });
    
    new google.maps.InfoWindow({
        content: data.content
    });
    
    google.maps.event.addListener(data.name, 'click', function () {
        infowindow.open(map, data.name);
    })
    
});
//END EXPERIMENT

      // google.maps.event.addListener(rec1_marker, 'click', function() {
      //   infowindow.open(map,rec1_marker);
      // });

}

google.maps.event.addDomListener(window, 'load', initialize);

// END OF GOOGLE MAP ///////////////////////////////////////////////////////////////////////



