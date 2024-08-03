import { type CustomAtRules, type Visitor } from 'lightningcss';
import composeVisitors from "../node_modules/lightningcss/node/composeVisitors.js";

export type Plugin<C extends CustomAtRules> = {
    visitor: Visitor<C>,
    customAtRules?: C
}

export function composePlugins<C extends CustomAtRules>(plugins: (Plugin<C> | Visitor<C>)[]) {
    let customAtRules: CustomAtRules = {};
    let visitors: Visitor<CustomAtRules>[] = [];

    plugins.forEach(p => {
        if ('visitor' in p) {
            visitors.push(p.visitor)
            if (p.customAtRules) { Object.assign(customAtRules, p.customAtRules) }
        } else {
            visitors.push(p)
        }
    });

    return {
        customAtRules, visitor: composeVisitors(visitors)
    }
}