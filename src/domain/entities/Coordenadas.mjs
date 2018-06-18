import axios from 'axios'

const googleApiKey = 'AIzaSyDbG-S5qctvRfRgMKfbW0noYAK8GgybRSg'
const googleApiUrl = 'https://maps.googleapis.com/maps/api/geocode/json'

export default class Coordenadas {
    static async atualizarCoordenadas(endereco) {
        const {data} = await this.buscarCoordenadas(endereco)
        if (this.resultadoValido(data)) {
            const locationApiResult = data.results[0].geometry.location
            let localizacao = this.criarLocalizacao()
            localizacao.coordinates = this.criarCoordenadas(locationApiResult)
            return localizacao
        }
    }

    static resultadoValido(data) {
        return data.results[0] && data.results[0].geometry.location
    }

    static criarCoordenadas(location) {
        let coordinates = []
        coordinates[0] = location.lat
        coordinates[1] = location.lng
        return coordinates
    }

    static async buscarCoordenadas(endereco) {
        const key = googleApiKey
        const address = this.montarEnderecoParaBusca(endereco)
        return axios.get(googleApiUrl, {params: {address, key}})
    }

    static montarEnderecoParaBusca(endereco) {
        return endereco.rua + ', ' +
            endereco.numero + ', ' +
            endereco.bairro + ', ' +
            (endereco.complemento ? endereco.complemento + ', ' : '') +
            endereco.cep + ', ' +
            endereco.cidade + ', ' +
            endereco.estado
    }

    static criarLocalizacao() {
        return {type: 'Point'}
    }
}
