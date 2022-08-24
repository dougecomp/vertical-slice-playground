const express = require('express')

const { makeUserRoutes } = require('./modules/user/user-routes')

module.exports.makeRoutes = function (app) {
  const router = express.Router()
  makeUserRoutes(app)
  app.use(router)
}