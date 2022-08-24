const { CreateUserController } = require('./create-user-controller')

module.exports.createUserRoute = (router) => {
  router.post('/users', (request, response) => {
    const createUserController = new CreateUserController()
    createUserController.handle()
    response.end()
  })
}