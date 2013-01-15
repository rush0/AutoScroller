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

		$('body').bind( 'click', function(){
			window.clearInterval( runScroller );	
		});
	}
};