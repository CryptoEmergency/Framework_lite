import {
    setStorage,
    Variable
} from '@betarost/cemserver/cem.js'

const start = async function ({ _id = null, method, params, result, error }) {
    if (!params || !params[0] || !params[1]) {
        return
    }
    let auth = false
    if (params[1]._id) {
        auth = true
    }
    setStorage("auth", auth)
    setStorage("myInfo", params[1])
    setStorage("uuid", params[0])
    Variable.auth = auth
    Variable.myInfo = params[1]
    Variable.uuid = params[0]
}

export default start;