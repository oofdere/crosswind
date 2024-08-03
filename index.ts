import { composeVisitors, transform, type CustomAtRules, type Visitor } from 'lightningcss';

export const twUnit: Visitor<CustomAtRules> = {
    Token: {
        dimension(token) {
            if (token.unit === 'tw') {
                return {
                    raw: `${token.value * 0.25}rem`
                }
            }
        }
    }
} as const;

let { code, map } = transform({
    filename: 'test.css',
    minify: true,
    code: new TextEncoder().encode('.foo {size: 0.25tw}'),
    visitor: composeVisitors([twUnit])
});

console.log(code.toString())