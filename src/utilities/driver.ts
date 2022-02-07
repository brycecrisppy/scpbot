const {Builder, WebDriver} = require("selenium-webdriver");

export namespace Driver {

    export let driver: typeof WebDriver = null

    // region | Initialization Methods ---------------------------------------------------------------------------------

    export async function init() {
        try {
            return await new Builder()
                .forBrowser("chrome")
                .build()
        } catch(e) {
            console.log(e)
        }
    }

    // endregion
}