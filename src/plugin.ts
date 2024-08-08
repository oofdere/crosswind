import type { CustomAtRules, Visitor } from "lightningcss";
import _ from "lodash";

export type Plugin<C extends CustomAtRules> = {
	visitor: Visitor<C>;
	customAtRules?: C;
};

export function composePlugins<C extends CustomAtRules>(
	plugins: (Plugin<C> | Visitor<C>)[],
) {
	const customAtRules: CustomAtRules = {};
	const visitor: Visitor<CustomAtRules> = {};

	for (const p of plugins) {
		if ("visitor" in p) {
			_.merge(visitor, p.visitor);
			if (p.customAtRules) {
				Object.assign(customAtRules, p.customAtRules);
			}
		} else {
			_.merge(visitor, p);
		}
	};

	return { customAtRules, visitor };
}
