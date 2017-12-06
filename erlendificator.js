
$( window ).load( function() {
	erlendificator.erlendificateAllImages();
});

var erlendificator = {
	
	erlendificateAllImages: function() {
		$('img').hover(function(){
			$( this ).attr('src','https://pbs.twimg.com/profile_images/436795340771979264/WAJYXMib_400x400.jpeg');
		});
	}
		
}


