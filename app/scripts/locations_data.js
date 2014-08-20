    
// var longjohns_sm = '../images/longjohns_sm.png';
var longjohns_sm = '../images/shirt_sm.png';
var shirt_sm = '../images/shirt_sm.png';


var locations = [
    
    {
        name: 'rec1', 
        position: new google.maps.LatLng(29.865911,-95.566727),
        // map: map,
        title:"American Textile Recycling",
        icon: longjohns_sm,
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
        icon: shirt_sm,
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
        icon: longjohns_sm,
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
        icon: shirt_sm,
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
        icon: longjohns_sm,
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
        icon: shirt_sm,
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
        icon: longjohns_sm,
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
        icon: shirt_sm,
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
        title:"San Francisco D.O.E.",
        icon: longjohns_sm,
        content: 
        '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading"><a href="http://www.sfenvironment.org/" target="_blank">San Francisco D.O.E.</a></h1>'+
            '<div id="bodyContent">'+
                '<p>1455 E Market St #1200, San Francisco, CA 94103</p>'+
            '</div>'+
        '</div>'    
    }, {
        name: 'rec10', 
        position: new google.maps.LatLng(32.552842,-117.052538),
        // map: map,
        title:"A & E Textile Recovery",
        icon: shirt_sm,
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



