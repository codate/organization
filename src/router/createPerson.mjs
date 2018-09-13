import express from 'express'
import validatePerson from './validatePerson.mjs'
import createPerson from 'src/business/usecase/CreatePerson.mjs'
import Responder from 'src/common/Responder.mjs'

function handlerPerson(req, res, next) {
    const responder = new Responder(req, res, next)
    createPerson.execute(req.body, responder)
}

const router = express.Router()
router.post('/people', validatePerson, handlerPerson)
export default router

