import {runner} from '@codate/commons'
import routers from './src/ports/routers'

const config = {
    url: process.env.URL || 'mongodb://localhost/organization',
    port: process.env.PORT || 8083
}

export default runner(config, routers(config))