/**
 * Created by Rabbit on 2019/05/06.
 */

'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // const {hasBody} = app.middleware;
  const hasBody = app.middleware.hasBody();

  router.get('/config', controller.config.loadConfigData);
  router.get('/userToken', controller.userToken.loadUserToken);

  router.get('/news', controller.news.loadNewsData);

  router.get('/user', controller.user.index.findUser);

  router.get('/addUser', controller.user.index.addUser);

  router.get('/deleteUser', controller.user.index.deleteUser);
};
