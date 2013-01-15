var AutoScroller = {

	scrollSpeed: 1000,

	scrollAmount: 15,

	timerInterval: 500,

	autoScroll: function(){

		var body = $( 'body');
		body.animate({ scrollTop: body.scrollTop() + this.scrollAmount }, this.timerInterval );
	},

	init: function(){
		var app = this;
		var runScroller = setInterval( function(){
			app.autoScroll();
		}, app.timerInterval );

		
		var set = false, start, diff = 400;

		$('body').bind('mousemove', function( e ){

		     if ( set ){
		          if ( ( Math.abs( start.x - e.clientX ) > diff ) || ( Math.abs( start.y - e.clientY ) > diff ) ){
		               window.clearInterval( runScroller );
		          }
		     }
		     else{
		          start = { x: e.clientX, y: e.clientY };
		          set = true;     
		     }
		});
	}
};