import { composeVisitors, transform, type CustomAtRules, type Visitor } from "lightningcss";
import { composePlugins, spacing, type Plugin } from "../index";

import { expect, test } from "bun:test";

export function testHelper<C extends CustomAtRules>(visitors: (Plugin<C> | Visitor<C>)[], input: string) {
    let { code } = transform({
        filename: 'test.css',
        minify: true,
        code: new TextEncoder().encode(input),
        ...composePlugins(visitors)
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