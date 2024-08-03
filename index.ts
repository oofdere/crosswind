import { composePlugins, type Plugin } from './src/plugin';
import { screens } from './src/screens';
import { spacing } from './src/spacing';

export const crosswind = composePlugins([screens, spacing])

export { composePlugins, type Plugin, screens, spacing }