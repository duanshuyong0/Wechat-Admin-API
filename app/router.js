'use strict'
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller,middleware } = app
  const jwt = middleware.jwt()
  const adminJwt = middleware.jwt({ access:100 })
  router.get('/', controller.home.index)

  // role
  // router.post('/api/role', controller.role.create)
  // router.delete('/api/role/:id', controller.role.destroy)
  // router.put('/api/role/:id', controller.role.update)
  // router.get('/api/role/:id', controller.role.show)
  // router.get('/api/role', controller.role.index)
  router.delete('/api/role', adminJwt,controller.role.removes)
  router.resources('role', '/api/role', adminJwt,controller.role)
  
  // userAccess
  router.post('/api/user/access/register', controller.userAccess.register)
  router.post('/api/user/access/login', controller.userAccess.login)
  router.get('/api/user/access/current', jwt, controller.userAccess.current)
  router.post('/api/user/access/logout', jwt,controller.userAccess.logout)
  router.put('/api/user/access/resetPsw', jwt, controller.userAccess.resetPsw)
  router.put('/api/user/access/resetSelf', jwt, controller.userAccess.resetSelf)

  // user
  // router.post('/api/user', controller.user.create)
  // router.delete('/api/user/:id', controller.user.destroy)
  // router.put('/api/user/:id', controller.user.update)
  // router.get('/api/user/:id', controller.user.show)
  // router.get('/api/user', controller.user.index)
  router.delete('/api/user',adminJwt, controller.user.removes)
  router.resources('user', '/api/user', adminJwt,controller.user)

  // ai
  router.get('/api/ai', jwt, controller.ai.show)
  router.put('/api/ai', jwt, controller.ai.update)
  router.delete('/api/ai', jwt, controller.ai.destroy)
  router.post('/api/ai', jwt, controller.ai.create)


  //wechat
  router.get('/api/wechat/chart', jwt, controller.wechat.chart)
  router.get('/api/wechat/logout', jwt, controller.wechat.logout)
  router.get('/api/wechat/export', jwt, controller.wechat.export)
  router.get('/api/wechat/start', jwt, controller.wechat.start)
  router.get('/api/wechat/getCode', jwt, controller.wechat.getCode)
  router.get('/api/wechat/checkLogin', jwt, controller.wechat.checkLogin)
  router.get('/api/wechat/friends', jwt, controller.wechat.friends)
  router.get('/api/wechat/rooms', jwt, controller.wechat.rooms)
  router.get('/api/wechat/rooms/members', jwt, controller.wechat.RoomMembers)
  router.get('/api/wechat/rooms/members/add', jwt, controller.wechat.RoomMembersAdd)
  router.get('/api/wechat/message/ai', jwt, controller.wechat.MessageAiRun)
}
