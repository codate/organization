import mongoose from 'mongoose'
import logger from './logger.mjs'
import environment from './environment.mjs'

export default class Server {
    constructor(app) {
        this.app = app
    }

    async start() {
        this.registerGlobalEvents()
        await this.connectDb()
        return this.startApp()
    }

    registerGlobalEvents() {
        process.on('unhandledRejection', (reason, p) => {
            throw reason
        })
        process.on('uncaughtException', (error) => {
            logger.error('Error not handled %s', error)
            process.exit(1)
        })
    }

    async connectDb() {
        mongoose.Promise = global.Promise
        const options = {
            autoIndex: true,
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 500,
            poolSize: 3,
            bufferMaxEntries: 0
        }
        return mongoose.connect(environment.db.url, options)
    }

    async startApp() {
        return new Promise((resolve, reject) => {
            try {
                this.app.listen(environment.server.port, (serv) => {
                    resolve(serv)
                })
            } catch (err) {
                reject(err)
            }
        })
    }
}
