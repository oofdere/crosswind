import { composeVisitors, transform } from "lightningcss";
import { composePlugins, spacing, screens, colorScheme, crosswind } from ".";


let { code, map } = transform({
    filename: 'test.css',
    minify: true,
    code: new TextEncoder().encode('.foo{size: 4em}'),
    ...composePlugins([crosswind])
});

console.log(code.toString())