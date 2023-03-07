import { parsingUrl, Variable } from '@betarost/cemserver/cem.js'

const loadListen = async function () {
    try {
        window.onpopstate = function (e) {
            e.preventDefault()
            parsingUrl()
        }
        await parsingUrl();
        return
    } catch (error) {
        console.error(error, "loadListen")
    }
}

export { loadListen };