import type { CustomAtRules } from "lightningcss";
import type { Plugin } from "./plugin";

export const screens: Plugin<CustomAtRules> = {
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