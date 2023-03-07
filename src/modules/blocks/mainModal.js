import {
    jsx,
    jsxFrag,
    Variable,
    getInitList,
    load
} from '@betarost/cemserver/cem.js';


const mainModal = async function () {

    load({
        ID: "modals",
        fn: async function (reload) {

            if (!Variable.Modals.length) {
                return <div></div>
            }

            let ID = "Modal-" + (Variable.Modals.length - 1)
            let InitList = getInitList()
            if (!reload && InitList[ID].fnLoad) {
                await InitList[ID].fnLoad(reload)
            }
            let replase = !reload
            if (Variable.Modals.length > 1) {
                replase = true
            }
            let arrReturn = Variable.Modals.map((item, index) => {
                let ID = "Modal-" + index
                let rel = reload
                if (index != Variable.Modals.length - 1) {
                    rel = false
                }
                return (
                    <div>
                        {async () => {
                            return await InitList[ID].fn(rel)
                        }}
                    </div>
                )
            })
            return (
                <div>
                    {arrReturn}
                </div>

            )
        },
    })
    return
};

export { mainModal };