import {BaseComponent} from "./baseComponent";
import {Driver} from "../utilities/driver";
import {Element} from "../utilities/element";
const {By} = require("selenium-webdriver")

export class HeaderComponent extends BaseComponent {

    // region | Member Variables ---------------------------------------------------------------------------------------

    // -- XPaths --
    headerXpath: String = "//*[@id=\"header\"]"
    searchXpath: String = "//*[@id=\"search-top-box-input\"]"
    titleXpath: String = "//*[@id=\"header\"]/h1/a/span"

    // -- Matchers--
    headerMatcher = By.xpath(this.headerXpath)
    titleMatcher = By.xpath(this.titleXpath)
    searchMatcher = By.xpath(this.searchXpath)

    // -- Elements --
    headerElement = Element.init(this.headerMatcher).element()
    titleElement = Element.init(this.titleMatcher).element()
    searchElement = Element.init(this.searchMatcher).element()

    // endregion

    // region | Construction Methods -----------------------------------------------------------------------------------

    async init(matcher: typeof By = this.headerElement) {
        this.matcher = By.xpath(this.headerXpath)
        await super.init(this.matcher)

        return this
    }

    // endregion -------------------------------------------------------------------------------------------------------

    // region | Action Methods -----------------------------------------------------------------------------------------

    async clickOnTitle() {
        await Driver.driver.findElement(this.titleMatcher).click()
    }

    async search() {
        await Driver.driver.findElement(this.searchMatcher).sendKeys("Hello World")
    }

    // endregion

    // region | Assertion Methods --------------------------------------------------------------------------------------

    async verifyTitle() {
        expect(await Driver.driver.findElement(this.titleMatcher).isDisplayed).toBeTruthy()
    }

    // endregion
}