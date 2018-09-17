import express from 'express'
import updateOrganization from 'src/business/usecase/UpdateOrganization.mjs'
import Responder from 'src/common/Responder.mjs'

function handlerOrganization(req, res, next) {
    const responder = new Responder(req, res, next)
    updateOrganization.execute(req.body, responder)
}

const router = express.Router()
router.put('/organizations', handlerOrganization)
export default router
