import express from 'express'
import validatePerson from './validatePerson.mjs'
import updatePerson from 'src/business/usecase/UpdatePerson.mjs'
import Responder from 'src/common/Responder.mjs'

function handlerPerson(req, res, next) {
    const responder = new Responder(req, res, next)
    updatePerson.execute(req.body, responder)
}

const router = express.Router()
router.put('/people', validatePerson, handlerPerson)
export default router
