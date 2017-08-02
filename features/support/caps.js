'use strict';

module.exports = {
  ios: {
    '11.0': {
      platformName: 'ios',
      platformVersion: '11.0',
      deviceName: 'iPhone 6',
      app: __dirname + "/../../apps/appName.zip"
    },
  },

  android: {
    '4.4': {
      platformName: 'Android',
      platformVersion: '4.4',
      deviceName: 'Android Phone',
      app: __dirname + "\\apps\\ApiDemos-debug.apk"
    },
    '5.0.1': {
      platformName: 'Android',
      platformVersion: '5.0.1',
      deviceName: 'Android Phone',
      app: __dirname + "\\apps\\ApiDemos-debug.apk"
    }
  },
};
