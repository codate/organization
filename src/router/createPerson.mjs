import express from 'express'
import Joi from 'joi'
import validate from 'express-validation'
import Responder from 'src/common/Responder.mjs'
import CreatePerson from 'src/business/usecase/CreatePerson.mjs'

const validateSchema = {
    body: {
        email: Joi.string().required(),
        name: Joi.string().required(),
        docNumber: Joi.string().required(),
        phoneNumber: Joi.string().required(),
        photo: Joi.string(),
        address: Joi.object({
            street: Joi.string().required(),
            number: Joi.string().required(),
            supplement: Joi.string(),
            district: Joi.string().required(),
            zip: Joi.string().required(),
            city: Joi.string().required(),
            state: Joi.string().required()
        }).required()
    }
}

const router = express.Router()
router.post('/people', validate(validateSchema), (req, res, next) => {
    const responder = new Responder(req, res, next)
    const createPerson = new CreatePerson()
    createPerson.execute(req.body, responder)
})

export default router
