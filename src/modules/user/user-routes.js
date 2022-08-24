const express = require('express')

const { createUserRoute } = require('./create-user/create-user-route')

module.exports.makeUserRoutes = function (router) {
  createUserRoute(router)
}