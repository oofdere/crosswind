import type { CustomAtRules } from "lightningcss";
import type { Plugin } from "./plugin";

const breakpoints = {
    sm: 40,
    md: 48,
    lg: 64,
    xl: 80,
    xxl: 96
} as const;

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
                    if (typeof rule.prelude.value === 'string' && rule.prelude.value in breakpoints) {

                        return {
                            type: 'media',
                            value: {
                                rules: rule.body.value,
                                loc: rule.loc,
                                query: {
                                    mediaQueries: [
                                        {
                                            mediaType: 'all',
                                            condition: {
                                                type: 'feature',
                                                value: {
                                                    type: 'plain',
                                                    name: "min-width",
                                                    value: {
                                                        type: 'length',
                                                        value: {
                                                            type: 'value',
                                                            value: {
                                                                unit: 'rem',
                                                                value: breakpoints[rule.prelude.value]
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        }
    }
} as const;