import { transform, type CustomAtRules, type Visitor } from 'lightningcss';
import { composePlugins, type Plugin } from './src/plugin';

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

export const screen: Plugin<CustomAtRules> = {
    customAtRules: {
        screen: {
            prelude: '<custom-ident>',
            body: 'style-block'
        }
    },
    visitor: {
        Rule: {
            custom: {
                screen(rule) {
                    console.log(rule.body.value)

                    return {
                        type: 'media',
                        value: {
                            rules: rule.body.value,
                            loc: rule.loc,
                            query: {
                                mediaQueries: [
                                    { raw: '(min-width: 500px)' }
                                ]
                            }
                        }
                    }
                }
            }
        }
    }
} as const;

export { composePlugins, type Plugin }