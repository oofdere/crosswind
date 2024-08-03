import { transform } from "lightningcss";
import { composePlugins, spacing, screens } from ".";

const a = {
    filename: 'test.css',
    minify: true,
    code: new TextEncoder().encode('.foo {size: 0.25tw; @screen lg {size: 1tw; color: red;}}'),
    ...composePlugins([spacing, screens]),
}

let { code, map } = transform(a);
console.log(a)

console.log(code.toString())