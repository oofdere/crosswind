import { type CustomAtRules, type Visitor } from 'lightningcss';
import _ from "lodash";

export type Plugin<C extends CustomAtRules> = {
    visitor: Visitor<C>,
    customAtRules?: C
}

export function composePlugins<C extends CustomAtRules>(plugins: (Plugin<C> | Visitor<C>)[]) {
    let customAtRules: CustomAtRules = {};
    let visitor: Visitor<CustomAtRules> = {};

    plugins.forEach(p => {
        if ('visitor' in p) {
            _.merge(visitor, p.visitor)
            if (p.customAtRules) { Object.assign(customAtRules, p.customAtRules) }
        } else {
            _.merge(visitor, p)

        }
    });

    return { customAtRules, visitor }
}