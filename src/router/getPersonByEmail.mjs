import express from 'express'
import getPersonByEmail from 'src/business/usecase/GetPersonByEmail.mjs'
import Responder from 'src/common/Responder.mjs'

function handlerPerson(req, res, next) {
    const responder = new Responder(req, res, next)
    getPersonByEmail.execute(req.params.email, responder)
}

const router = express.Router()
router.get('/people/:email', handlerPerson)
export default router
