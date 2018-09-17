import express from 'express'
import removePerson from 'src/business/usecase/RemovePerson.mjs'
import Responder from 'src/common/Responder.mjs'

function handlerPerson(req, res, next) {
    const responder = new Responder(req, res, next)
    removePerson.execute(req.params.id, responder)
}

const router = express.Router()
router.delete('/people/:id', handlerPerson)
export default router
