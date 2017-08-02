'use strict';

module.exports = function() {

	this.Given(/^A user that wants to see "([^"]*)" elements$/, function(section, callback) {
	  	this.pages.homeMenu.goToSection(section).then(function(){
	    	callback();
	  	}, function(err){
	    	console.log(err);
	    	callback();
	  	});
	});

};
