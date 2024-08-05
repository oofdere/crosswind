import type { CustomAtRules, Visitor } from "lightningcss";

export const size: Visitor<CustomAtRules> = {
    Declaration: {
        custom: {
            size: (prop) => {
                return [{
                    property: "unparsed",
                    value: {
                        propertyId: {
                            property: "width"
                        },
                        value: prop.value
                    }
                }, {
                    property: "unparsed",
                    value: {
                        propertyId: {
                            property: "height"
                        },
                        value: prop.value
                    }
                }]
            }
        }
    }
} as const;