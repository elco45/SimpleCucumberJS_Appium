'use strict';

var rek = require('rekuire')
 , ArcsView;

ArcsView = (function() {

  function ArcsView(driver) {
    this.driver = driver;
    return this;
  }

  ArcsView.prototype.getTextTitle = function(){
    return this.driver.waitForElementById('action_bar_title', 5000, 1000).text();
  };

  return ArcsView;
})();

module.exports = ArcsView;
