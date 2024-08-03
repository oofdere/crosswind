import { composeVisitors, transform, type CustomAtRules, type Visitor } from 'lightningcss';

export const spacing: Visitor<CustomAtRules> = {
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
    visitor: composeVisitors([spacing])
});

console.log(code.toString())