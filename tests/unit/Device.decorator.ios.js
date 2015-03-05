describe( "Device", function () {

	beforeEach( function () {
		module( 'angular.device' );
	} );

	describe( "Public Property: isIphone", function () {

		it( "should be true, if the user agent contains 'iPhone'", function () {
			// *******
			// given
			// *******
			var mockWindow = {
				navigator: {
					userAgent: 'someUserAgentString'
				}
			};

			mockWindow.navigator.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9A334';

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
			expect( service.isIphone ).toBe( true );
		} );

		it( "should be false, if the user agent does not contain 'iPhone'", function () {
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
			expect( service.isIphone ).toBe( false );
		} );

	} );

	describe( "Public Property: isIpad", function () {

		it( "should be true, if the user agent contains 'iPad'", function () {
			// *******
			// given
			// *******
			var mockWindow = {
				navigator: {
					userAgent: 'someUserAgentString'
				}
			};

			mockWindow.navigator.userAgent = 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25';

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
			expect( service.isIpad ).toBe( true );
		} );

		it( "should be false, if the user agent does not contain 'iPad'", function () {
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
			expect( service.isIpad ).toBe( false );
		} );

	} );

	describe( "Public Property: isIpod", function () {

		it( "should be true, if the user agent contains 'iPod'", function () {
			// *******
			// given
			// *******
			var mockWindow = {
				navigator: {
					userAgent: 'someUserAgentString'
				}
			};

			mockWindow.navigator.userAgent = 'Mozila/5.0 (iPod; U; CPU like Mac OS X; xx) AppleWebKit/420.1 (KHTML, like Geckto) Version/3.0 Mobile/3A101a Safari/419.3';

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
			expect( service.isIpod ).toBe( true );
		} );

		it( "should be false, if the user agent does not contain 'iPod'", function () {
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
			expect( service.isIpod ).toBe( false );
		} );

	} );

	describe( "Public Property: isIos", function () {

		it( "should be true, if isIphone is true, isIpad is false and isIpod is false", function () {
			// *******
			// given
			// *******
			var mockWindow = {
				navigator: {
					userAgent: 'someUserAgentString'
				}
			};

			mockWindow.navigator.userAgent = 'Mozilla/5.0 (iPhone; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Mobile/9A334';

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
			expect( service.isIos ).toBe( true );
		} );

		it( "should be true, if isIphone is false, isIpad is true and isIpod is false", function () {
			// *******
			// given
			// *******
			var mockWindow = {
				navigator: {
					userAgent: 'someUserAgentString'
				}
			};

			mockWindow.navigator.userAgent = 'Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5355d Safari/8536.25';

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
			expect( service.isIos ).toBe( true );
		} );

		it( "should be true, if isIphone is false, isIpad is false and isIpod is true", function () {
			// *******
			// given
			// *******
			var mockWindow = {
				navigator: {
					userAgent: 'someUserAgentString'
				}
			};

			mockWindow.navigator.userAgent = 'Mozila/5.0 (iPod; U; CPU like Mac OS X; xx) AppleWebKit/420.1 (KHTML, like Geckto) Version/3.0 Mobile/3A101a Safari/419.3';

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
			expect( service.isIos ).toBe( true );
		} );

		it( "should be false, if isIphone is false, isIpad is false and isIpod is false", function () {
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
			expect( service.isIos ).toBe( false );
		} );

	} );
} );