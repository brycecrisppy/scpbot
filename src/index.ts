export type Pair = {
    x: number | string,
    y: number | string,
}

export const createNumberPair = (x: number, y: number): Pair => {
    return {x: x, y: y}
}

export const createStringPair = (x: string, y: string): Pair => {
    return {x: x, y: y}
}

export const sum = (x: number, y: number): number => {
    return x + y
}