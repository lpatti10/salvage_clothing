var rec1_zips = [39, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79]

var rec2_zips = [27, 28, 29, 30, 31, 35, 36, 37, 38]

var rec3_zips = [32, 33, 34]

var rec4_zips = [40, 41, 42, 43, 44, 45, 46, 47, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69]

var rec5_zips = [07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]

var rec6_zips = [00, 01, 02, 03, 04, 05, 06]

var rec7_zips = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]

var rec8_zips = [82, 83, 97, 98, 99]

var rec9_zips = [84, 89, 93, 94, 95, 96]

var rec10_zips = [80, 81, 85, 86, 87, 88, 90, 91, 92]

//underscore 'indexof' tells you where in array the match is found




//Tim's sample code for looping through data array

var locations = [ /* array of Locations */ ];


_.each(locations, function (data) {
    
    new google.maps.Marker({
        position: new google.maps.LatLng(data.lat, data.long),
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
    
})