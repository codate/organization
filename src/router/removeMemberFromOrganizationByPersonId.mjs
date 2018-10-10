import express from 'express'
import removeMemberFromOrganization from 'src/business/usecase/RemoveMemberFromOrganization.mjs'
import Responder from 'src/common/Responder.mjs'

function handlerOrganization(req, res, next) {
    const responder = new Responder(req, res, next)
    removeMemberFromOrganization.execute(req.params.organizationId, req.params.memberId, responder)
}

const router = express.Router()
router.delete('/organizations/:organizationId/members/:memberId', handlerOrganization)
export default router
