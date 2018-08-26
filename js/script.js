var tmplList = document.getElementById('template-list').innerHTML;
var tmplMain = document.getElementById('main-carousel').innerHTML;

Mustache.parse(tmplList);

var listItems = '';

for(var i = 0; i < myObject.length; i++) {
  // console.log(myObject);
  listItems += Mustache.render(tmplList, myObject[i]);
  // console.log(listItems);
}

tmplMain.innerHTML = listItems;
// console.log(listItems);

// <div class="carousel-cell" style="background-image: url( {{ image }} )">
//     <div class="container">{{ title }}</div>  
//   </div>

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