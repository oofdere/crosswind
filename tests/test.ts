import { transform, type CustomAtRules, type Visitor } from "lightningcss";
import { composePlugins, type Plugin } from "../src/plugin";

export function testHelper<C extends CustomAtRules>(visitors: (Plugin<C> | Visitor<C>)[], input: string) {
    let { code } = transform({
        filename: 'test.css',
        minify: true,
        code: new TextEncoder().encode(input),
        ...composePlugins(visitors)
    });

    return code.toString()
}
