// place files you want to import through the `$lib` alias in this folder.

import { createHighlighter } from "shiki";

export const highlighter = await createHighlighter({
    langs: ['css'],
    themes: ['github-dark']
});

export const codeToHtml = (c: string) => {
    return highlighter.codeToHtml(c, {
        lang: 'css',
        theme: 'github-dark'
    })
}