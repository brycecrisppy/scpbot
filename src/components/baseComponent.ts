import {Driver} from "../utilities/driver";
const {By, until} = require("selenium-webdriver");

export class BaseComponent {

    // region | Member Variables ---------------------------------------------------------------------------------------

    matcher: typeof By = null;

    // endregion

    // region | Constructor --------------------------------------------------------------------------------------------

    init(matcher: typeof By) {
        this.matcher = matcher
    }

    // endregion

    // region | Action Method ------------------------------------------------------------------------------------------

    async click() {
        await Driver.driver.findElement(this.matcher).click()
    }

    // endregion

    // region | Assertion Methods --------------------------------------------------------------------------------------

    // endregion

    // region | Wait Methods -------------------------------------------------------------------------------------------

    async waitForDisplay() {
        await Driver.driver.wait(until.elementIsVisible, 5000)
    }

    //endregion
}