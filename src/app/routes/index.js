const routes = require('express').Router();
const patternRoute = require('../useCases/pattern/patternRoute');
const consult = require('../useCases/consult/consultApiUseCase')
const aval = require('../useCases/avalabled/avalabledUseCase')


routes.get('/', patternRoute)
routes.post('/searchRoute', consult.consultApi);
routes.post('/avalabled',aval.avalabled)





module.exports = routes