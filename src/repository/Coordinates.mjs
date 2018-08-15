import axios from 'axios'
import environment from 'src/common/environment.mjs'

export default class Coordinates {
    static buildAddress(address) {
        return address.street + ', ' +
            address.number + ', ' +
            address.district + ', ' +
            (address.supplement ? address.supplement + ', ' : '') +
            address.zip + ', ' +
            address.city + ', ' +
            address.state
    }

    static createCoordinates(location) {
        let coordinates = []
        coordinates[0] = location.lat
        coordinates[1] = location.long
        return coordinates
    }

    static createLocation() {
        return {type: 'Point'}
    }

    static async fetchCoordinates(addr) {
        const key = environment.google.apiKey
        const address = this.buildAddress(addr)
        return axios.get(environment.google.apiUrl, {params: {address, key}})
    }

    static isValid(data) {
        return data.results[0] && data.results[0].geometry.location
    }

    static async updateCoordinates(address) {
        const {data} = await this.fetchCoordinates(address)
        if (this.isValid(data)) {
            const locationApiResult = data.results[0].geometry.location
            let location = this.createLocation()
            location.coordinates = this.createCoordinates(locationApiResult)
            return location
        }
    }
}
