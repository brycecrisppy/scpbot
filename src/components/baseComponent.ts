import {Driver} from "../utilities/driver";
import {Element} from "../utilities/element";
const {By, until, WebElement} = require("selenium-webdriver");

export class BaseComponent {

    // region | Member Variables ---------------------------------------------------------------------------------------

    matcher: typeof By;
    element: typeof WebElement

    // endregion

    // region | Constructor --------------------------------------------------------------------------------------------

    async init(matcher: typeof By) {
        this.matcher = matcher
        this.element = await Element.init(this.matcher).element()

        return this
    }

    // endregion

    // region | Action Method ------------------------------------------------------------------------------------------

    async click() {
        await this.element.click()
    }

    // endregion

    // region | Assertion Methods --------------------------------------------------------------------------------------

    // endregion

    // region | Wait Methods -------------------------------------------------------------------------------------------

    async waitForDisplay() {
        await Driver.driver.wait(until.elementIsVisible(this.element), 5000)
    }

    //endregion
}