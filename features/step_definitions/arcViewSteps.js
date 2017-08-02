'use strict';

module.exports = function() {

	this.Then(/^I should see the "Graphics\/([^"]*)" title$/, function(element, done) {
	  	this.pages.arcsView.getTextTitle().should.eventually.eql('Graphics\/' + element).notify(done);
	});

};
