import { composePlugins, type Plugin } from './src/plugin';
import { screens } from './src/screens';
import { spacing } from './src/spacing';
import { colorScheme } from './src/colorScheme';
import { size } from './src/size';

export const crosswind = composePlugins([screens, spacing, colorScheme, size])

export { composePlugins, type Plugin, screens, spacing, colorScheme, size }