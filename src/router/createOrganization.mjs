import express from 'express'
import createOrganization from 'src/business/usecase/CreateOrganization.mjs'
import Responder from 'src/common/Responder.mjs'

function handlerOrganization(req, res, next) {
    const responder = new Responder(req, res, next)
    createOrganization.execute(req.body, responder)
}

const router = express.Router()
router.post('/organizations', handlerOrganization)
export default router

