import {Driver} from "./driver";

const {By, WebElement} = require("selenium-webdriver");

export namespace Element {

    export let matcher: typeof By

    // region | Constructor --------------------------------------------------------------------------------------------

    export function init(matcher: typeof By) {
        this.matcher = matcher
        return this
    }

    // endregion

    // region | Utility Methods ----------------------------------------------------------------------------------------

    export async function element(): Promise<typeof WebElement> {
        try {
            return await Driver.driver.findElement(this.matcher)
        } catch (e) {
            console.log(e)
        }
    }

    // endregion
}