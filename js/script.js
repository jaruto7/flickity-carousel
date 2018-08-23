var elem = document.querySelector('.main-carousel');
var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.restart-button');

var flkty = new Flickity( elem, {
  	// options
	cellAlign: 'left',
	//disable dots
	pageDots: false,
	// Enable hash behavior
	hash: true,
});

// // element argument can be a selector string
// //   for an individual element
// var flkty = new Flickity( '.main-carousel', {
//   // options

// });
buttons = fizzyUIUtils.makeArray( buttons );
buttonGroup.addEventListener( 'click', function( event ) {
  // filter for button clicks
  if ( !matchesSelector( event.target, '.restart-button' ) ) {
    return;
  }
  var index = buttons.indexOf( event.target );
  flkty.select( index );
});