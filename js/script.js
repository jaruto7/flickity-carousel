var elem = document.querySelector('.main-carousel');
var buttonGroup = document.querySelector('.button-group');
var buttons = buttonGroup.querySelectorAll('.restart-button');
var progressBar = document.querySelector('.progress-bar');

// Use mustache to output array elements into html
var tmplMain = document.getElementById('main-carousel').innerHTML;
var tmplItm = document.getElementById('template-items').innerHTML;

Mustache.parse(tmplItm);

var listItems = '';

for(var i = 0; i < myObject.length; i++) {
  // console.log(myObject);
  listItems += Mustache.render(tmplItm, myObject[i]);
  // console.log(listItems);
}

var fullProductList = Mustache.render(tmplMain, {carousel: listItems});
// console.log(listItems);
result.innerHTML = fullProductList;

// Use flickity to create carousel and add some options
var flkty = new Flickity( elem, {
  	// options
	cellAlign: 'left',
	//disable dots below carousel
	pageDots: false,
	// Enable hash behavior
	hash: true,
});

// Use progress bar scroll
flkty.on( 'scroll', function( progress ) {
	progress = Math.max( 0, Math.min( 1, progress ) );
  	progressBar.style.width = progress * 100 + '%';
  });
// Use button restart functionality to move to the first slide
buttons = fizzyUIUtils.makeArray( buttons );

buttonGroup.addEventListener( 'click', function( event ) {
  // filter for button clicks
  if ( !matchesSelector( event.target, '.restart-button' ) ) {
    return;
  }
  var index = buttons.indexOf( event.target );
  flkty.select( index );
});