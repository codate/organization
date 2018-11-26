import express from 'express'
import getOrganizationsByPersonId from 'src/business/usecase/GetOrganizationsByPersonId.mjs'
import Responder from 'src/common/Responder.mjs'

function handlerOrganization(req, res, next) {
    const responder = new Responder(req, res, next)
    getOrganizationsByPersonId.execute(req.params.id, responder)
}

const router = express.Router()
router.get('/people/:id/organizations', handlerOrganization)
export default router
