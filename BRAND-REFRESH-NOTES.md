# Pillsette brand refresh review package

## Brand tokens
- Background: `#FBF6E3`
- Hero and large headings: `#DD5228`
- Supporting emphasis / controls: `#F88701`
- Typeface: Helvetica / Arial
- Logo: `assets/images/pillsette-logo.svg`

## Pages included
- `/` homepage (`index.html`)
- `/blog/` blog landing page (`blog/index.html`)
- Individual post template (`_layouts/post.html`, used by Markdown posts with `layout: post`)
- `/subscribe/` waitlist signup page (`subscribe/index.html`)
- `/survey/` survey results page (`survey/index.html`)

## Preview files
Open the files in `previews/` to review static page examples. They contain example article content and sample supporter names where live Jekyll data is normally injected.

## Logo note
The supplied official SVG logo is installed at `assets/images/pillsette-logo.svg`. The original vector paths and brand fills are preserved; only the SVG viewBox and intrinsic dimensions have been adjusted to remove the large transparent margins around the artwork.

## Existing integration items
The waitlist form still needs the Loops endpoint/embed configured. Social URLs remain placeholders. The five supporter names shown in the supplied homepage reference are included as text until their original logo files are supplied. The survey page's original survey graphics were not included in the ZIP; its existing labelled graphic placeholders are retained.


## Supplied logo update

Replaced the temporary screenshot-derived wordmark with the supplied `ps-logo-nobg.svg`. The vector artwork is preserved and its oversized transparent square canvas has been cropped using a tighter viewBox, so the mark renders at its natural horizontal proportions in headers and footers.
