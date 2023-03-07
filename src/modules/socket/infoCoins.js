import {
    Variable
} from '@betarost/cemserver/cem.js'

const start = async function ({ _id = null, method, params, result, error }) {
    // console.log('=8d1d23=', params)
    if (params && params[0] && params[1]) {
        Variable.infoCoin = params[0]
        Variable.statusConnect = params[1]
    }
}

export default start;