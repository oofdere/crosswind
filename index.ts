import { colorScheme } from "./src/colorScheme";
import { type Plugin, composePlugins } from "./src/plugin";
import { screens } from "./src/screens";
import { size } from "./src/size";
import { spacing } from "./src/spacing";

export const crosswind = composePlugins([screens, spacing, colorScheme, size]);

export { composePlugins, type Plugin, screens, spacing, colorScheme, size };
