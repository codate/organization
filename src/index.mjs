import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import createPerson from 'src/router/createPerson.mjs'
import updatePerson from 'src/router/updatePerson.mjs'
import {validationErrorHandler, joiErrorHandler, mongoErrorHandler, defaultErrorHandler} from 'src/common/errorHandler.mjs'

const app = express()
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(helmet())
app.use(cors())

app.use(createPerson)
app.use(updatePerson)

app.use(validationErrorHandler)
app.use(joiErrorHandler)
app.use(mongoErrorHandler)
app.use(defaultErrorHandler)

export default app
