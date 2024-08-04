import type { CustomAtRules } from "lightningcss";
import type { Plugin } from "./plugin";

const breakpoints = {
    sm: 40,
    md: 48,
    lg: 64,
    xl: 80,
    xxl: 96
} as const;

export const colorScheme: Plugin<CustomAtRules> = {
    customAtRules: {
        light: {
            prelude: null,
            body: 'style-block'
        },
        dark: {
            prelude: null,
            body: 'style-block'
        }
    },
    visitor: {
        Rule: {
            custom: {
                light(rule) {
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
                                                name: "prefers-color-scheme",
                                                value: {
                                                    type: 'ident',
                                                    value: 'light'
                                                }
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    }
                },
                dark(rule) {
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
                                                name: "prefers-color-scheme",
                                                value: {
                                                    type: 'ident',
                                                    value: 'dark'
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
} as const;