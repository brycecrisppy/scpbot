import {sum, createNumberPair, createStringPair, Pair} from "../src";
import {HeaderComponent} from "../src/components/headerComponent";
import {Driver} from "../src/utilities/driver";
const {By, until} = require("selenium-webdriver")

test("Test the sum function", () => {
    expect(sum(2, 2)).toBe(4);
})

test("Test create number pair", () => {
    const numberPair: Pair = createNumberPair(4, 2)
    expect(numberPair.x).toBe(4)
    expect(numberPair.y).toBe(2)
})

test("Test create string pair", () => {
    const stringPair: Pair = createStringPair("hello", "world")
    expect(stringPair.x).toBe("hello")
    expect(stringPair.y).toBe("world")
})

test("Webdriver stuffs", async () => {
    const header = await new HeaderComponent().init()

    try {
        Driver.driver = await Driver.init()

        await Driver.driver.get("https://scp-wiki.wikidot.com/")
        await header.waitForDisplay()
        await header.verifyTitle()
        await header.clickOnTitle()
        await header.waitForDisplay()
        await header.verifyTitle()
        await header.search()
        await header.verifyTitle()
    } finally {
        await Driver.driver.quit()
    }
})
