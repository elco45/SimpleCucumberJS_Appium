"use strict";

var util = require('util')
  , path = require('path')
  , pagesPath = util.format('../pages/%sPages', process.env.PLATFORM)
  , HomeMenu = require(path.join(pagesPath, 'homeMenu.js'))
  , GraphicsMenu = require(path.join(pagesPath, 'graphicsMenu.js'))
  , ArcsView = require(path.join(pagesPath, 'arcsView.js'));

module.exports = function() {
  var wd = require('wd');
  var chai = require("chai");
  chai.should();
  chai.config.truncateThreshold = 0;
  var chaiAsPromised = require("chai-as-promised");
  chai.use(chaiAsPromised);
  chaiAsPromised.transferPromiseness = wd.transferPromiseness;

  this.World = function World (callback) {
    this.driver = wd.promiseChainRemote({ host: 'localhost', port: 4723 });
    this.pages = {
      homeMenu: new HomeMenu(this.driver),
      graphicsMenu: new GraphicsMenu(this.driver),
      arcsView: new ArcsView(this.driver)
    };
    callback();
  };
};
