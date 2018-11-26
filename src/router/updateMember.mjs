import express from 'express'
import updateMember from 'src/business/usecase/UpdateMember.mjs'
import Responder from 'src/common/Responder.mjs'

function handlerOrganization(req, res, next) {
    const responder = new Responder(req, res, next)
    updateMember.execute(req.params.id,req.body, responder)
}

const router = express.Router()
router.put('/organizations/:id/members', handlerOrganization)
export default router
