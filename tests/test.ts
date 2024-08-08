import { type CustomAtRules, type Visitor, transform } from "lightningcss";
import { crosswind } from "..";
import { type Plugin, composePlugins } from "../src/plugin";

export function testHelper<C extends CustomAtRules>(
	_visitors: (Plugin<C> | Visitor<C>)[],
	input: string,
) {
	const { code } = transform({
		filename: "test.css",
		minify: true,
		code: new TextEncoder().encode(input),
		...crosswind,
	});

	return code.toString();
}
