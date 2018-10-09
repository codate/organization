import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import createPerson from 'src/router/createPerson.mjs'
import updatePerson from 'src/router/updatePerson.mjs'
import removePerson from 'src/router/removePerson.mjs'
import getPersonByEmail from 'src/router/getPersonByEmail.mjs'
import createOrganization from 'src/router/createOrganization.mjs'
import updateOrganization from 'src/router/updateOrganization.mjs'
import removeOrganization from 'src/router/removeOrganization.mjs'
import createMembersOnOrganization from 'src/router/createMembersOnOrganization.mjs'
import updateMember from 'src/router/updateMember.mjs'
import getMembersByOrganizationId from 'src/router/getMembersByOrganizationId.mjs'
import getOrganizationsByPersonId from 'src/router/getOrganizationsByPersonId.mjs'

import {validationErrorHandler, joiErrorHandler, mongoErrorHandler, defaultErrorHandler} from 'src/common/errorHandler.mjs'

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(helmet())
app.use(cors())

app.use(createPerson)
app.use(updatePerson)
app.use(removePerson)
app.use(getPersonByEmail)

app.use(createOrganization)
app.use(updateOrganization)
app.use(removeOrganization)
app.use(createMembersOnOrganization)
app.use(updateMember)
app.use(getMembersByOrganizationId)
app.use(getOrganizationsByPersonId)

app.use(validationErrorHandler)
app.use(joiErrorHandler)
app.use(mongoErrorHandler)
app.use(defaultErrorHandler)

export default app
