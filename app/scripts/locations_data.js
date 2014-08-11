    // var rec2 = new google.maps.LatLng(32.946979,-80.624673); 
    // var rec3 = new google.maps.LatLng(27.7692544,-82.6630569);
    // var rec4 = new google.maps.LatLng(38.6791963,-90.3947229); 
    // var rec5 = new google.maps.LatLng(40.7914948,-73.1382576); 
    // var rec6 = new google.maps.LatLng(42.19606,-71.75631); 
    // var rec7 = new google.maps.LatLng(44.050317,-91.6214551); 
    // var rec8 = new google.maps.LatLng(47.8487843,-122.2389721); 
    // var rec9 = new google.maps.LatLng(37.7756117,-122.4179582); 
    // var rec10 = new google.maps.LatLng(32.552842,-117.052538); 
    
    var longjohns = '../images/longjohns_icon.png';
    var shirt = '../images/lsshirt_icon.png';
    ///////////////////////////////////////////////////////////

var locations = [{

        name: "rec1_marker", 
        position: new google.maps.LatLng(29.865911,-95.566727),
        // map: map,
        title:"American Textile Recycling Services",
        icon: longjohns,
        content: '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        'sandstone rock formation in the southern part of the '+
        'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
        'south west of the nearest large town, Alice Springs; 450&#160;km '+
        '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
        'features of the Uluru - Kata Tjuta National Park. Uluru is '+
        'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
        'Aboriginal people of the area. It has many springs, waterholes, '+
        'rock caves and ancient paintings. Uluru is listed as a World '+
        'Heritage Site.</p>'+
        '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
        'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
        '(last visited June 22, 2009).</p>'+
        '</div>'+
        '</div>'
    }, {




}]




//Tim's sample code for looping through data array




// _.each(locations, function (data) {
    
//     new google.maps.Marker({
//         position: data.position,
//         map: map,
//         title: data.title,
//         icon: data.icon
//     });
    
//     new google.maps.InfoWindow({
//         content: data.content
//     });
    
//     google.maps.event.addListener(data.name, 'click', function () {
//         infowindow.open(map, data.name);
//     })
    
// })
