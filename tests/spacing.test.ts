import { expect, test } from "bun:test";
import { testHelper } from "./test";
import { spacing } from "../index";


test("tw units", () => {
    expect(testHelper([spacing], '.foo {size: 1tw}'))
        .toBe('.foo{size:.25rem}')
})

test("calc w/ tw", () => {
    expect(testHelper([spacing], '.foo {size: calc(var(--size) * 1tw)}'))
        .toBe('.foo{size:calc(var(--size)*.25rem)}')
})