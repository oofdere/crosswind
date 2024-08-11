import type { CustomAtRules, Visitor } from "lightningcss";
import { mergician } from 'mergician';


export type Plugin<C extends CustomAtRules> = {
	visitor: Visitor<C>;
	customAtRules?: C;
};

export function composePlugins<C extends CustomAtRules>(
	plugins: (Plugin<C> | Visitor<C>)[],
) {
	const customAtRules: CustomAtRules = {};
	let visitor: Visitor<CustomAtRules> = {};

	for (const p of plugins) {
		if ("visitor" in p) {
			visitor = mergician(visitor, p.visitor);
			if (p.customAtRules) {
				Object.assign(customAtRules, p.customAtRules);
			}
		} else {
			visitor = mergician(visitor, p);
		}
		console.log(visitor)
	}

	return { customAtRules, visitor };
}
