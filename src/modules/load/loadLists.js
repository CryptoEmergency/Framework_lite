import { Variable } from '@betarost/cemserver/cem.js'

const modalsList = function () {
    const req = import.meta.webpackContext('../../modals', {
        recursive: true,
        regExp: /\.js$/,
        // exclude: /(index.js|index_old.js)/
    });

    const forExport = req.keys().reduce((acc, next) => {
        acc[next.replace("./", "").split(".js")[0]] = req(next).default
        return acc
    }, {});

    return forExport
}

const routerList = function () {
    const req = import.meta.webpackContext('../../navigation', {
        recursive: true,
        regExp: /\.js$/,
        // exclude: /(header|footer|modal)/
    });

    const forExport = req.keys().reduce((acc, next) => {
        acc[next.replace("./", "").split(".js")[0]] = req(next).default
        return acc
    }, {});

    return forExport
}

const socketList = function () {
    const req = import.meta.webpackContext('../../modules/socket', {
        recursive: true,
        regExp: /\.js$/,
        // exclude: /(header|footer|modal)/
    });

    const forExport = req.keys().reduce((acc, next) => {
        acc[next.replace("./", "").replace("/", "").split(".js")[0]] = req(next).default
        return acc
    }, {});

    return forExport
}

const loadLists = async function () {
    Variable.listModals = modalsList()
    Variable.listRouter = routerList()
    // Variable.socketList = socketList()
}

export { loadLists };