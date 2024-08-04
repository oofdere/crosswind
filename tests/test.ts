import { transform, type CustomAtRules, type Visitor } from "lightningcss";
import { composePlugins, type Plugin } from "../src/plugin";
import { crosswind } from "..";

export function testHelper<C extends CustomAtRules>(_visitors: (Plugin<C> | Visitor<C>)[], input: string) {
    let { code } = transform({
        filename: 'test.css',
        minify: true,
        code: new TextEncoder().encode(input),
        ...crosswind
    });

    return code.toString()
}
