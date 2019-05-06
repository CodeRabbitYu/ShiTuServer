/* eslint valid-jsdoc: "off" */

'use strict';


/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1551968675820_2223';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.mongoose = {
    client: {
      url: 'mongodb://127.0.0.1/example',
      options: {},
    }
  }

  return {
    ...config,
    ...userConfig,
  };
};

// exports.mongoose = {
//   client: {
//     url: 'mongodb://127.0.0.1/example',
//     options: {},
//   }
// };



// exports.mongoose = {
//   clients: {
//     // clientId, access the client instance by app.mongooseDB.get('clientId')
//     db1: {
//       url: 'mongodb://127.0.0.1/example1',
//       options: {},
//     },
//     db2: {
//       url: 'mongodb://127.0.0.1/example2',
//       options: {},
//     },
//   },
// };
