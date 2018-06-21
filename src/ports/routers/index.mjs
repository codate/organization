import express from 'express'
import personRepository from '../../adapters/repository/PersonRepository.mjs'
import PersonController from '../controllers/PersonController.mjs'
import CreatePerson from '../../domain/usecases/CreatePerson.mjs'

export default function getRouter() {
    function createPerson(req, res, next) {
        const personController = new PersonController(req, res, next)
        const createPerson = new CreatePerson(personController, personRepository)
        createPerson.execute()
    }

    const router = express.Route()
    router.post('/person', (req, res, next) => createPerson(req, res, next))
    return router
}
