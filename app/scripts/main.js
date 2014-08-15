//Declare global variable for user_loc_map as empty string, then update based on submission


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
    var mapOptions1 = {
        center: new google.maps.LatLng(29.865911,-95.566727),
        zoom: 8,
        scrollwheel: false,
        panControl: false,
        zoomControl: false,
        streetViewControl: false
    };
    var mapOptions2 = {
        center: new google.maps.LatLng(32.946979,-80.624673),
        zoom: 8,
        scrollwheel: false,
        panControl: false,
        zoomControl: false,
        streetViewControl: false
    };
    var mapOptions3 = {
        center: new google.maps.LatLng(27.7692544,-82.6630569),
        zoom: 8,
        scrollwheel: false,
        panControl: false,
        zoomControl: false,
        streetViewControl: false
    };
    var mapOptions4 = {
        center: new google.maps.LatLng(38.6791963,-90.3947229),
        zoom: 8,
        scrollwheel: false,
        panControl: false,
        zoomControl: false,
        streetViewControl: false
    };
    var mapOptions5 = {
        center: new google.maps.LatLng(40.7914948,-73.1382576),
        zoom: 8,
        scrollwheel: false,
        panControl: false,
        zoomControl: false,
        streetViewControl: false
    };
    var mapOptions6 = {
        center: new google.maps.LatLng(42.19606,-71.75631),
        zoom: 8,
        scrollwheel: false,
        panControl: false,
        zoomControl: false,
        streetViewControl: false
    };
    var mapOptions7 = {
        center: new google.maps.LatLng(44.050317,-91.6214551),
        zoom: 8,
        scrollwheel: false,
        panControl: false,
        zoomControl: false,
        streetViewControl: false
    };
    var mapOptions8 = {
        center: new google.maps.LatLng(47.8487843,-122.2389721),
        zoom: 8,
        scrollwheel: false,
        panControl: false,
        zoomControl: false,
        streetViewControl: false
    };
    var mapOptions9 = {
        center: new google.maps.LatLng(37.7756117,-122.4179582),
        zoom: 8,
        scrollwheel: false,
        panControl: false,
        zoomControl: false,
        streetViewControl: false
    };
    var mapOptions10 = {
        center: new google.maps.LatLng(32.552842,-117.052538),
        zoom: 8,
        scrollwheel: false,
        panControl: false,
        zoomControl: false,
        streetViewControl: false
    };

    // A "map" object, passing it the div element and the map properties.
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    var map1 = new google.maps.Map(document.getElementById("map-canvas1"), mapOptions1);
    var map2 = new google.maps.Map(document.getElementById("map-canvas2"), mapOptions2);
    var map3 = new google.maps.Map(document.getElementById("map-canvas3"), mapOptions3);
    var map4 = new google.maps.Map(document.getElementById("map-canvas4"), mapOptions4);
    var map5 = new google.maps.Map(document.getElementById("map-canvas5"), mapOptions5);
    var map6 = new google.maps.Map(document.getElementById("map-canvas6"), mapOptions6);
    var map7 = new google.maps.Map(document.getElementById("map-canvas7"), mapOptions7);
    var map8 = new google.maps.Map(document.getElementById("map-canvas8"), mapOptions8);
    var map9 = new google.maps.Map(document.getElementById("map-canvas9"), mapOptions9);
    var map10 = new google.maps.Map(document.getElementById("map-canvas10"), mapOptions10);

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    map1.mapTypes.set('map_style', styledMap);
    map1.setMapTypeId('map_style');

    map2.mapTypes.set('map_style', styledMap);
    map2.setMapTypeId('map_style');

    map3.mapTypes.set('map_style', styledMap);
    map3.setMapTypeId('map_style');

    map4.mapTypes.set('map_style', styledMap);
    map4.setMapTypeId('map_style');   

    map5.mapTypes.set('map_style', styledMap);
    map5.setMapTypeId('map_style');

    map6.mapTypes.set('map_style', styledMap);
    map6.setMapTypeId('map_style');

    map7.mapTypes.set('map_style', styledMap);
    map7.setMapTypeId('map_style');

    map8.mapTypes.set('map_style', styledMap);
    map8.setMapTypeId('map_style');

    map9.mapTypes.set('map_style', styledMap);
    map9.setMapTypeId('map_style');

    map10.mapTypes.set('map_style', styledMap);
    map10.setMapTypeId('map_style');

    //Applies all 10 markers to master map
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


        // _.each(locations, function (data) {
        // _.where(locations, {name: "rec2"}) 
        var marker1 = new google.maps.Marker({
            position: new google.maps.LatLng(29.865911,-95.566727),
            map: map1, 
            title: "American Textile Recycling",
            icon: longjohns
        });
        var marker2 = new google.maps.Marker({
            position: new google.maps.LatLng(32.946979,-80.624673),
            map: map2, 
            title: "Carolina Textile Recycling",
            icon: shirt
        });
        var marker3 = new google.maps.Marker({
            position: new google.maps.LatLng(27.7692544,-82.6630569),
            map: map3, 
            title: "Suncoast Textile Recycling",
            icon: longjohns
        });
        var marker4 = new google.maps.Marker({
            position: new google.maps.LatLng(38.6791963,-90.3947229),
            map: map4, 
            title: "USAgain",
            icon: shirt
        });
        var marker5 = new google.maps.Marker({
            position: new google.maps.LatLng(40.7914948,-73.1382576),
            map: map5, 
            title: "Earthrite Textile Recycling",
            icon: longjohns
        });
        var marker6 = new google.maps.Marker({
            position: new google.maps.LatLng(42.19606,-71.75631),
            map: map6, 
            title: "Millbury Textile Recycling",
            icon: shirt
        });
        var marker7 = new google.maps.Marker({
            position: new google.maps.LatLng(44.050317,-91.6214551),
            map: map7, 
            title: "Miller Waste Mills Inc",
            icon: longjohns
        });
        var marker8 = new google.maps.Marker({
            position: new google.maps.LatLng(47.8487843,-122.2389721),
            map: map8, 
            title: "Retex",
            icon: shirt
        });
        var marker9 = new google.maps.Marker({
            position: new google.maps.LatLng(37.7756117,-122.4179582),
            map: map9, 
            title: "San Francisco D.O.E.",
            icon: longjohns
        });
        var marker10 = new google.maps.Marker({
            position: new google.maps.LatLng(32.552842,-117.052538),
            map: map10, 
            title: "A & E Textile Recovery",
            icon: shirt
        });

        var infowindow1 = new google.maps.InfoWindow({
            content: 
            '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<p>YOUR GOODS WILL BE PROCESSED AT:</p>'+
                '<h1 id="firstHeading" class="firstHeading"><a href="http://atrscorp.com" target="_blank">American Textile Recycling</a></h1>'+
                '<div id="bodyContent">'+
                    '<p>10739 W Little York Rd #100, Houston, TX <br> (713) 856-6170</p>'+
                '</div>'+
            '</div>'
        });
        var infowindow2 = new google.maps.InfoWindow({
            content: 
            '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<p>YOUR GOODS WILL BE PROCESSED AT:</p>'+
                '<h1 id="firstHeading" class="firstHeading"><a href="https://plus.google.com/105428587463519345659/about?gl=us&hl=en" target="_blank">Carolina Textile Recycling</a></h1>'+
                '<div id="bodyContent">'+
                    '<p>68 Anderson Rd, Walterboro, SC <br> (843) 538-8644</p>'+
                '</div>'+
            '</div>'
        });
        var infowindow3 = new google.maps.InfoWindow({
            content: 
            '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<p>YOUR GOODS WILL BE PROCESSED AT:</p>'+
                '<h1 id="firstHeading" class="firstHeading"><a href="https://plus.google.com/102660832478251858597/about?hl=en" target="_blank">Suncoast Textile Recycling</a></h1>'+
                '<div id="bodyContent">'+
                    '<p>201 22nd St S, St Petersburg, FL <br> (727) 729-2862</p>'+
                '</div>'+
            '</div>'
        });
        var infowindow4 = new google.maps.InfoWindow({
            content: 
            '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<p>YOUR GOODS WILL BE PROCESSED AT:</p>'+
                '<h1 id="firstHeading" class="firstHeading"><a href="http://www.usagain.com" target="_blank">USAgain</a></h1>'+
                '<div id="bodyContent">'+
                    '<p>1113 N Warson Rd, St Louis, MO <br> (314) 291-0046</p>'+
                '</div>'+
            '</div>'
        });
        var infowindow5 = new google.maps.InfoWindow({
            content: 
            '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<p>YOUR GOODS WILL BE PROCESSED AT:</p>'+
                '<h1 id="firstHeading" class="firstHeading"><a href="https://plus.google.com/113257260254977162301/about?hl=en" target="_blank">Earthrite Textile Recycling</a></h1>'+
                '<div id="bodyContent">'+
                    '<p>2073 5th Ave, Ronkonkoma, NY</p>'+
                '</div>'+
            '</div>'
        });
        var infowindow6 = new google.maps.InfoWindow({
            content: 
            '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<p>YOUR GOODS WILL BE PROCESSED AT:</p>'+
                '<h1 id="firstHeading" class="firstHeading"><a href="http://www.millburyrecycling.com/" target="_blank">Millbury Textile Recycling</a></h1>'+
                '<div id="bodyContent">'+
                    '<p>4 Lincoln Ave, Millbury, MA <br> (508) 865-1717</p>'+
                '</div>'+
            '</div>'
        });
        var infowindow7 = new google.maps.InfoWindow({
            content: 
            '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<p>YOUR GOODS WILL BE PROCESSED AT:</p>'+
                '<h1 id="firstHeading" class="firstHeading"><a href="http://www.millerwastemills.com/" target="_blank">Miller Waste Mills Inc</a></h1>'+
                '<div id="bodyContent">'+
                    '<p>580 E Front St, Winona, MN <br> (507) 454-6906</p>'+
                '</div>'+
            '</div>'
        });
        var infowindow8 = new google.maps.InfoWindow({
            content: 
            '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<p>YOUR GOODS WILL BE PROCESSED AT:</p>'+
                '<h1 id="firstHeading" class="firstHeading"><a href="http://www.retexnorthwest.com/" target="_blank">Retex</a></h1>'+
                '<div id="bodyContent">'+
                    '<p>412 164th St SW, Lynnwood, WA 98087</p>'+
                '</div>'+
            '</div>'
        });
        var infowindow9 = new google.maps.InfoWindow({
            content: 
            '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<p>YOUR GOODS WILL BE PROCESSED AT:</p>'+
                '<h1 id="firstHeading" class="firstHeading"><a href="http://www.sfenvironment.org/" target="_blank">San Francisco D.O.E.</a></h1>'+
                '<div id="bodyContent">'+
                    '<p>1455 E Market St #1200, San Francisco, CA 94103</p>'+
                '</div>'+
            '</div>'    
        });
        var infowindow10 = new google.maps.InfoWindow({
            content: 
            '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<p>YOUR GOODS WILL BE PROCESSED AT:</p>'+
                '<h1 id="firstHeading" class="firstHeading"><a href="http://aetextilerecovery.com/" target="_blank">A & E Textile Recovery</a></h1>'+
                '<div id="bodyContent">'+
                    '<p>2365 Via Segundo, San Diego, CA 92173</p>'+
                '</div>'+
            '</div>'    
        });

        infowindow1.open(map1, marker1);
        infowindow2.open(map2, marker2);
        infowindow3.open(map3, marker3);
        infowindow4.open(map4, marker4);
        infowindow5.open(map5, marker5);
        infowindow6.open(map6, marker6);
        infowindow7.open(map7, marker7);
        infowindow8.open(map8, marker8);
        infowindow9.open(map9, marker9);
        infowindow10.open(map10, marker10);

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

