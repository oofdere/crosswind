import { composeVisitors, transform } from "lightningcss";
import { composePlugins, spacing, screens, colorScheme, crosswind } from ".";


let { code, map } = transform({
    filename: 'test.css',
    minify: true,
    code: new TextEncoder().encode('.foo{color: red;@light {color: green;}; @dark {color:yellow;}}'),
    ...crosswind
});

console.log(code.toString())