const { CreateUserUseCase } = require("./create-user-usecase")

module.exports.CreateUserController = class CreateUserController {
  handle() {
    console.log('Create user controller called');
    const createUser = new CreateUserUseCase()
    createUser.execute()
  }
}