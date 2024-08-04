import { transform } from "lightningcss";
import { composePlugins, spacing, screens, colorScheme } from ".";

const a = {
    filename: 'test.css',
    minify: true,
    code: new TextEncoder().encode('.foo {color: red; @light {color: green;} @dark {color: yellow;}}'),
    ...composePlugins([colorScheme]),
}

let { code, map } = transform(a);

console.log(code.toString())