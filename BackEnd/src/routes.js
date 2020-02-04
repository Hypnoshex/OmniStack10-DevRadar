const { Router } = require('express')
const routes = Router()
const DevController = require('./controller/DevController')
const SearchController = require('./controller/SearchController')

routes.get('/devs', DevController.index)
routes.get('/search', SearchController.index)
routes.post('/devs', DevController.store)

module.exports = routes