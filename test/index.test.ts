import {sum, createNumberPair, createStringPair, Pair} from "../src";

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
