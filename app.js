import { initGo } from '@betarost/cemserver/cem.js'
import {
    loadLists,
    loadStorage,
    loadData,
    loadListen,
    // initSocket,
    mainBlock,
    mainHeader,
    mainFooter,
    mainModal
} from "@modules/index.js"


import "@assets/css/index.js"

const start = async function () {
    await loadLists();
    await loadData();
    await loadStorage();
    await loadListen();
    // await initSocket();
    await mainBlock();
    await mainHeader();
    await mainFooter();
    await mainModal();
    await initGo("newPage")
}

start();