import axios from 'axios'

const googleApiKey = 'AIzaSyDbG-S5qctvRfRgMKfbW0noYAK8GgybRSg'
const googleApiUrl = 'https://maps.googleapis.com/maps/api/geocode/json'

// TODO Recuperar as configuracoes do process.env.SOMETHING
export default class Coordinates {
    static async updateCoordinates(address) {
        const {data} = await this.fetchCoordinates(address)
        if (this.isValid(data)) {
            const locationApiResult = data.results[0].geometry.location
            let location = this.createLocation()
            location.coordinates = this.createCoordinates(locationApiResult)
            return location
        }
    }

    static isValid(data) {
        return data.results[0] && data.results[0].geometry.location
    }

    static createCoordinates(location) {
        let coordinates = []
        coordinates[0] = location.lat
        coordinates[1] = location.long
        return coordinates
    }

    static async fetchCoordinates(addr) {
        const key = googleApiKey
        const address = this.buildAddress(addr)
        return axios.get(googleApiUrl, {params: {address, key}})
    }

    static buildAddress(address) {
        return address.street + ', ' +
            address.number + ', ' +
            address.district + ', ' +
            (address.supplement ? address.supplement + ', ' : '') +
            address.zip + ', ' +
            address.city + ', ' +
            address.state
    }

    static createLocation() {
        return {type: 'Point'}
    }
}
