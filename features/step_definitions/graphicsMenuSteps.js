'use strict';

module.exports = function() {

	this.When(/^I navigate to "([^"]*)" tab$/, function(element, callback) {
	  	this.pages.graphicsMenu.goToTab(element).then(function(){
	    	callback();
	  	}, function(err){
	    	console.log(err);
	    	callback();
	  	});
	});

};
