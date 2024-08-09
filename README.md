# crosswind

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/oofdere/crosswind/main.yml)
![NPM Version](https://img.shields.io/npm/v/lightningcss-plugin-crosswind)
![NPM License](https://img.shields.io/npm/l/lightningcss-plugin-crosswind)
[![Formatted with Biome](https://img.shields.io/badge/Formatted_with-Biome-60a5fa?style=flat&logo=biome)](https://biomejs.dev/)

a.k.a. tailwind-in-css.

## features

### `tw` units

tailwind sizing units

```css
.foo {
    width: 12tw;
    height: calc(12tw / 2);
}
```

### `@screen` queries

query for tailwind breakpoints

```css
.foo {
    color: red;

    @screen md {
        color: blue;
    }
}
```

### `@light` and `@dark` queries

shorthand for light and dark queries

```css
.foo {
    @light {
        color: black;
    }

    @dark {
        color: white;
    }
}
```

### `size` property

set width and height at once

```css
.foo {
    size: 12tw;
}
```

## how?
First, set up LightningCSS, then:

```bash
bun add lightningcss-plugin-crosswind
```

and then just update your LightningCSS config. For instance, with Vite:

```ts
import { defineConfig } from 'vite';
import { crosswind } from 'lightningcss-plugin-crosswind';

export default defineConfig({
	plugins: [],
	css: {
		transformer: 'lightningcss',
		lightningcss: {
			...crosswind
		}
	},
	build: {
		cssMinify: 'lightningcss'
	}
});
```

## why?

My main motivation is to easily access the TailwindCSS design system in CSS, which has saved me from many, many hours of decision paralysis by providing sensible defaults. I don't hate utility classes but I do enjoy writing actual CSS as well, especially when I'm doing dynamic styling, or writing a library that might end up being used without Tailwind installed.

This has been possible with `@apply` in the past, but that always felt like a very messy solution to me since you avoid standard CSS syntax, as the Tailwind team has also pointed out. Tailwind v4 makes this easier, by providing a set of standard variables that define the theme, however this just means more things to memorize, larger CSS files, and since these variables are not dynamic, you also sometimes have to do very ugly things like `calc(var(--spacing-0_5) / 2)` or `calc(var(--spacing-32) + var(--spacing-2))` to get the values you need.

I also really like semantic values, and Tailwind gives you sensible semantic values (sm, md, lg, xl, screen, etc.) which really helps me avoid decision paralysis.

---

This project was created using `bun init` in bun v1.1.21. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
