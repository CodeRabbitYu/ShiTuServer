'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // const {hasBody} = app.middleware;
  const hasBody = app.middleware.hasBody();

  router.get('/config', controller.config.config.index);

  router.get('/news', controller.news.loadNewsData);

  // router.get('/gank', controller.gank.index.loadGankData);

  router.get('/user', controller.user.index.findUser);

  router.get('/addUser', controller.user.index.addUser);

  router.get('/deleteUser', controller.user.index.deleteUser);

  // router.get('/baisi/:id', controller.baisi.index.index)
};
