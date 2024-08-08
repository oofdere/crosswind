import { composeVisitors, transform } from "lightningcss";
import {
	colorScheme,
	composePlugins,
	crosswind,
	screens,
	spacing,
} from "./dist/index";

const { code, map } = transform({
	filename: "test.css",
	minify: true,
	code: new TextEncoder().encode(".foo{size: 4tw}"),
	...composePlugins([crosswind]),
});

console.log(composePlugins([spacing]));

console.log(code.toString());
