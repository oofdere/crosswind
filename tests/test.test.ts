import { composeVisitors, transform, type CustomAtRules, type Visitor } from "lightningcss";
import { spacing } from "../index";

import { expect, test } from "bun:test";

function testHelper(visitors: Visitor<CustomAtRules>[], input: string) {
    let { code } = transform({
        filename: 'test.css',
        minify: true,
        code: new TextEncoder().encode(input),
        visitor: composeVisitors(visitors),

    });

    return code.toString()
}

test("tw units", () => {
    expect(testHelper([spacing], '.foo {size: 1tw}'))
        .toBe('.foo{size:.25rem}')
})

test("calc w/ tw", () => {
    expect(testHelper([spacing], '.foo {size: calc(var(--size) * 1tw)}'))
        .toBe('.foo{size:calc(var(--size)*.25rem)}')
})