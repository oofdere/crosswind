import type { CustomAtRules, Visitor } from "lightningcss";

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