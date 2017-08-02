'use strict';

var rek = require('rekuire')
 , HomeMenu;

HomeMenu = (function() {

  function HomeMenu(driver) {
    this.driver = driver;
    return this;
  }

  HomeMenu.prototype.goToSection = function(element){
    return this.driver.elementByAccessibilityId(element).tap();
  };

  return HomeMenu;
})();

module.exports = HomeMenu;
