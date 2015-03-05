describe( "Device", function () {

	beforeEach( function () {
		module( 'angular.device' );
	} );

	describe( "Public Property: isAndroid", function () {

		it( "should be true, if the user agent contains 'Android'", function () {
			// *******
			// given
			// *******
			var mockWindow = {
				navigator: {
					userAgent: 'someUserAgentString'
				}
			};

			mockWindow.navigator.userAgent = 'Mozilla/5.0 (Linux; Android 4.1.2; Nexus 7 Build/JZO54K) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Safari/535.19';

			// ******
			// when
			// ******
			module( function( $provide ) {
				$provide.value( '$window', mockWindow );
			});

			var service;

			inject(function ( _Device_ ) {
				service = _Device_;
			});

			// ******
			// then
			// ******
			expect( service.isAndroid ).toBe( true );
		} );

		it( "should be false, if the user agent does not contain 'Android'", function () {
			// *******
			// given
			// *******
			var mockWindow = {
				navigator: {
					userAgent: 'someUserAgentString'
				}
			};

			// ******
			// when
			// ******
			module( function( $provide ) {
				$provide.value( '$window', mockWindow );
			});

			var service;

			inject(function ( _Device_ ) {
				service = _Device_;
			});

			// ******
			// then
			// ******
			expect( service.isAndroid ).toBe( false );
		} );

	} );

} );