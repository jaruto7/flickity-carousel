var elem = document.querySelector('.main-carousel');
var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.restart-button');
var progressBar = document.querySelector('.progress-bar');

var flkty = new Flickity( elem, {
  	// options
	cellAlign: 'left',
	//disable dots
	pageDots: false,
	// Enable hash behavior
	hash: true,
});

// Use progress bar scroll
flkty.on( 'scroll', function( progress ) {
	progress = Math.max( 0, Math.min( 1, progress ) );
  	progressBar.style.width = progress * 100 + '%';
  });
// Use button to restart
buttons = fizzyUIUtils.makeArray( buttons );

buttonGroup.addEventListener( 'click', function( event ) {
  // filter for button clicks
  if ( !matchesSelector( event.target, '.restart-button' ) ) {
    return;
  }
  var index = buttons.indexOf( event.target );
  flkty.select( index );
});

var page-wrapper = document.getElementById('page-wrapper');

Mustache.parse(page-wrapper);

var listItems = '';

for(var i = 0; i < myObject.length; i++) {
  listItems = listItems + Mustache.render(page-wrapper, myObject[i]);
}

var allItems = Mustache.render(page-wrapper, {title: listItems}, {image: listItems}, {description: listItems});

page-wrapper.insertAdjacentHTML('beforeend', allItems);
