import { transform } from 'lightningcss';

let { code, map } = transform({
    filename: 'test.css',
    minify: true,
    code: new TextEncoder().encode('.foo {size: 0.25tw}'),
    visitor: {
        Token: {
            dimension(token) {
                if (token.unit === 'tw') {
                    return {
                        raw: `calc(${token.value * 0.25}rem)`
                    }
                }
            }
        }
    }
});

console.log(code.toString())