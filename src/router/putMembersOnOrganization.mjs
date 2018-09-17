import express from 'express'
import putMembersOnOrganization from 'src/business/usecase/PutMembersOnOrganization.mjs'
import Responder from 'src/common/Responder.mjs'

function handlerOrganization(req, res, next) {
    const responder = new Responder(req, res, next)
    putMembersOnOrganization.execute(req.body,req.params.id, responder)
}

const router = express.Router()
router.put('/organizations/:id', handlerOrganization)
export default router
