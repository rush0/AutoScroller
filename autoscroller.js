var AutoScroller = {

	scrollSpeed: 1000,

	scrollAmount: localStorage["arReadSpeed"] || 15,

	timerInterval: 100,

	init: function(){

		var app = this;
		var speed = this.scrollAmount;

		var runScroller = setInterval( function(){
			
			var body = $( 'body');
			var lastTop = body.scrollTop();

			body.animate({ scrollTop: lastTop + speed }, app.timerInterval );

			if ( body.scrollTop() == lastTop ){
				window.clearInterval( runScroller );
			}

		}, app.timerInterval );

		$('body').bind( 'click', function(){
			window.clearInterval( runScroller );	
		});
	}
};