import {sum, createNumberPair, createStringPair, Pair} from "../src";
import {BaseComponent} from "../src/components/baseComponent";
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
    expect(stringPair.y).toBe("worldasdf")
})

test("Webdriver stuffs", async () => {
    const xpath = "//*[@id=\"header\"]/h1/a/span"
    //const baseComponent = new BaseComponent(By.xpath(xpath))
    try {
        Driver.driver = await Driver.init()

        await Driver.driver.get("https://scp-wiki.wikidot.com/")
    } finally {
        await Driver.driver.quit()
    }
})
