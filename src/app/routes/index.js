const routes = require('express').Router();
const patternRoute = require('../useCases/pattern/patternRoute');
const consult = require('../useCases/consult/consultApiUseCase')


routes.get('/', patternRoute)
routes.post('/searchRoute', consult.consultApi);





module.exports = routes