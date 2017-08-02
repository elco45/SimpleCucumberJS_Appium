'use strict';

var rek = require('rekuire')
  , GraphicsMenu;

GraphicsMenu = (function() {

  function GraphicsMenu(driver) {
    this.driver = driver;
    return this;
  }

  GraphicsMenu.prototype.goToTab = function(element){
    return this.driver.elementByAccessibilityId(element).tap();
  };

  return GraphicsMenu;
})();

module.exports = GraphicsMenu;
