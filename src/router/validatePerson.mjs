import Joi from 'joi'
import validate from 'express-validation'

const schema = {
    body: {
        email: Joi.string().email({ minDomainAtoms: 2 }).required(),
        name: Joi.string().max(250).required(),
        docNumber: Joi.string().max(50).required(),
        phoneNumber: Joi.string().max(50).required(),
        photo: Joi.string().max(250),
        birthday: Joi.date().iso(),
        address: Joi.object({
            street: Joi.string().max(250).required(),
            number: Joi.string().max(50).required(),
            supplement: Joi.string().max(100),
            district: Joi.string().max(250).required(),
            zip: Joi.string().max(50).required(),
            city: Joi.string().max(250).required(),
            state: Joi.string().max(250).required()
        }).required()
    }
}

export default validate(schema)
