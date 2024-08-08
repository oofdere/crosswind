import { composeVisitors, transform } from "lightningcss";
import { colorScheme, composePlugins, crosswind, screens, spacing } from ".";

const { code, map } = transform({
	filename: "test.css",
	minify: true,
	code: new TextEncoder().encode(".foo{size: 4em}"),
	...composePlugins([crosswind]),
});

console.log(code.toString());
