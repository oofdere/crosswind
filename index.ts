import { composePlugins, type Plugin } from './src/plugin';
import { screens } from './src/screens';
import { spacing } from './src/spacing';
import { colorScheme } from './src/colorScheme';

export const crosswind = composePlugins([screens, spacing, colorScheme])

export { composePlugins, type Plugin, screens, spacing, colorScheme }