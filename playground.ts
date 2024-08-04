import { transform } from "lightningcss";
import { composePlugins, spacing, screens } from ".";

const a = {
    filename: 'test.css',
    minify: true,
    code: new TextEncoder().encode('.foo {color: red; @screen sm {color: green;}}'),
    ...composePlugins([spacing, screens]),
}

let { code, map } = transform(a);

console.log(code.toString())