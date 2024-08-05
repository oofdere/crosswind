import { expect, test } from "bun:test";
import { testHelper } from "./test";
import { spacing } from "../index";


test("tw units", () => {
    expect(testHelper([spacing], '.foo {width: 1tw}'))
        .toBe('.foo{width:.25rem}')
})

test("calc w/ tw", () => {
    expect(testHelper([spacing], '.foo {width: calc(var(--size) * 1tw)}'))
        .toBe('.foo{width:calc(var(--size)*.25rem)}')
})