import {
    Variable,
    timersStart,
    timersClear,
    load
} from '@betarost/cemserver/cem.js'

const mainBlock = async function () {
    load({
        ID: "newPage",
        fn: async ({ reload, ID, url, data }) => {
            timersClear();
            // console.log('=16853b=', Variable.listRouter)
            if (Variable.dataUrl.adress == "personal") {
                Variable.Static.HeaderShow = true
            } else {
                Variable.Static.HeaderShow = false;
            }

            try {
                let dataUrl = Variable.dataUrl
                if (url) { dataUrl = url }

                let page = dataUrl.adress;
                if (!page || page == "") {
                    await Variable.listRouter.index(data, ID, url);
                    return;
                }

                if (dataUrl.category) {
                    page += "/" + dataUrl.category;
                } else if (dataUrl.adress == "personal") {
                    page = "personal/index";
                    if (!Variable.listRouter[page]) {
                        await Variable.listRouter.error404(data, ID, url);
                        return;
                    }
                    await Variable.listRouter[page](Variable.myInfo, ID, url, data);
                    return;
                }

                if (dataUrl.page) {
                    page += "/" + dataUrl.page;
                }

                if (!Variable.listRouter[page]) {
                    await Variable.listRouter.error404(data, ID, url);
                    return;
                }
                await Variable.listRouter[page](data, ID, url);
                return;
            } catch (error) {
                console.error(error, "route", data, ID, url)
            }
        }
    })
    return
}

export { mainBlock }