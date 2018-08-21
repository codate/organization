import axios from 'axios'
import environment from 'src/common/environment.mjs'

class GeolocationRepository {
    async getLocation(address) {
        const {data} = await this._fetchCoordinates(address)
        if (this._isValid(data)) {
            const locationApiResult = data.results[0].geometry.location
            let location = this._createLocation()
            location.coordinates = this._createCoordinates(locationApiResult)
            return location
        }
    }

    _buildAddress(address) {
        return address.street + ', ' +
            address.number + ', ' +
            address.district + ', ' +
            (address.supplement ? address.supplement + ', ' : '') +
            address.zip + ', ' +
            address.city + ', ' +
            address.state
    }

    _createCoordinates(location) {
        let coordinates = []
        coordinates[0] = location.lat
        coordinates[1] = location.long
        return coordinates
    }

    _createLocation() {
        return {type: 'Point'}
    }

    async _fetchCoordinates(addr) {
        const key = environment.google.apiKey
        const address = this._buildAddress(addr)
        return axios.get(environment.google.apiUrl, {params: {address, key}})
    }

    _isValid(data) {
        return data.results[0] && data.results[0].geometry.location
    }
}

export default new GeolocationRepository()
