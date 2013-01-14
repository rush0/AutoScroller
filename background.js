chrome.browserAction.onClicked.addListener(function(tab) { 
		chrome.tabs.executeScript(tab.id, {file:'jquery.min.js', allFrames:false }, function(){
			chrome.tabs.executeScript(tab.id, {file:'autoscroller.js', allFrames:false }, function(){
				chrome.tabs.executeScript(tab.id, {code: "AutoScroller.init()"});
			});	
		});
		
		
});
