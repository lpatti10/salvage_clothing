// Ziptastic function working as-is!!
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
