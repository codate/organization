import express from 'express'
import getMembersByOrganizationId from 'src/business/usecase/GetMembersByOrganizationId.mjs'
import Responder from 'src/common/Responder.mjs'

function handlerOrganization(req, res, next) {
    const responder = new Responder(req, res, next)
    getMembersByOrganizationId.execute(req.params.id, responder)
}

const router = express.Router()
router.get('/organizations/:id/members', handlerOrganization)
export default router
