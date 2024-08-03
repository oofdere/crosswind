# crosswind

a.k.a. tailwind-in-css. doesn't work yet

## why?

My main motivation is to easily access the TailwindCSS design system in CSS, which has saved me from many, many hours of decision paralysis by providing sensible defaults. I don't hate utility classes but I do enjoy writing actual CSS as well, especially when I'm doing dynamic styling, or writing a library that might end up being used without Tailwind installed.

This has been possible with `@apply` in the past, but that always felt like a very messy solution to me since you avoid standard CSS syntax, as the Tailwind team has also pointed out. Tailwind v4 makes this easier, by providing a set of standard variables that define the theme, however this just means more things to memorize, larger CSS files, and since these variables are not dynamic, you also sometimes have to do very ugly things like `calc(var(--spacing-0_5) / 2)` or `calc(var(--spacing-32) + var(--spacing-2))` to get the values you need.

I also really like semantic values, and Tailwind gives you sensible semantic values (sm, md, lg, xl, screen, etc.) which really helps me avoid decision paralysis.

## roadmap
 - [x] `tw` units
 - [ ] `@screen <breakpoint>` queries
 - [ ] `@dark` and `@light` queries
 - [ ] `aspect-ratio: square` and `aspect-ratio: video`
 - [ ] semantic `perspective`s
 - [ ] translations as properties
 - [ ] preflight
 - [ ] typography
 - [ ] (maybe) daisyui and/or shadcn port
 - [ ] (maybe) container queries
 - [ ] respect tailwind config (prob only if there's financial demand lmao)

## how?
To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.1.21. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
