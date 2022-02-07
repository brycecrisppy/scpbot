import {BaseComponent} from "./baseComponent";
import {Driver} from "../utilities/driver";
const {By} = require("selenium-webdriver")

export class HeaderComponent extends BaseComponent {

    headerXpath: String = "\"\"\n"
    searchXpath: String = "//*[@id=\"search-top-box-input\"]"
    titleXpath: String = "//*[@id=\"header\"]/h1/a/span"

    titleMatcher = By.xpath(this.titleXpath)
    searchMatcher = By.xpath(this.searchXpath)

    init() {
        this.matcher = By.xpath(this.headerXpath)
        super.init(this.matcher)

        return this
    }

    async clickOnTitle() {
        await Driver.driver.findElement(this.titleMatcher).click()
    }

    async search() {
        await Driver.driver.findElement(this.searchMatcher).sendKeys("Hello World")
    }

    async verifyTitle() {
        expect(await Driver.driver.findElement(this.titleMatcher).isDisplayed).toBeTruthy()
    }
}