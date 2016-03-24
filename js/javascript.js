	$( document ).ready(function() {

			/* Basic Gallery */
			$( '.swipebox' ).swipebox();
			
			/* Video */
			$( '.swipebox-video' ).swipebox();

			/* Dynamic Gallery */
			$( '#gallery' ).click( function( e ) {
				e.preventDefault();
				$.swipebox( [
					{ href : 'img/1.jpg', title : 'My Caption' },
					{ href : 'img/2.jpg', title : 'My Second Caption' }
				] );
			} );
      });