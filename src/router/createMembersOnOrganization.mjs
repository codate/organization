import express from 'express'
import createMembersOnOrganization from 'src/business/usecase/CreateMembersOnOrganization.mjs'
import Responder from 'src/common/Responder.mjs'

function handlerOrganization(req, res, next) {
    const responder = new Responder(req, res, next)
    createMembersOnOrganization.execute(req.body,req.params.id, responder)
}

const router = express.Router()
router.post('/organizations/:id/members', handlerOrganization)
export default router
