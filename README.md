# Pillsette website refresh

A responsive Jekyll website project for GitHub Pages, including the homepage, blog index, individual article template, waitlist signup page, and survey results page.

## Brand system

- Main page background: `#FBF6E3`
- Hero and large heading colour: `#DD5228`
- Supporting emphasis and controls: `#F88701`
- Typeface: Helvetica / Arial
- Shared logo image: `assets/images/pillsette-logo.svg`
- Shared visual overrides: `assets/css/brand.css`

## Pages and templates

- `index.html` — homepage with the three newest Jekyll posts and waitlist signup
- `blog/index.html` — blog landing page with search and category filters
- `_layouts/post.html` — individual article template for Markdown posts using `layout: post`
- `subscribe/index.html` — dedicated waitlist signup page
- `survey/index.html` — survey results page with SEO metadata and structured data

## Blog posts

Add posts to `_posts/` using Jekyll's `YYYY-MM-DD-title.md` naming convention. Example front matter:

```yaml
---
layout: post
title: "Your article title"
date: 2026-11-12
description: "A useful summary for search results and social sharing."
excerpt: "A short summary for article cards."
categories: [Medication, Habits]
image: "/assets/images/article-image.jpg"
image_alt: "Description of the image"
---
```

The blog landing page reads `site.posts`, so post titles and excerpts are available in the page HTML when Jekyll builds the site.

## Before publishing

1. Replace the `REPLACE_ME` social profile URLs in the page templates with your real profile URLs.
2. The first five supporter names shown in the supplied homepage reference are listed in `_data/institutions.yml`; their original logo files were not present in the ZIP, so names are shown as accessible text until logo assets are added.
3. Connect the waitlist forms to Loops. The forms currently validate the email and show a setup message; they do not send or store addresses until the Loops endpoint or hosted form is connected. Do not put a private Loops API key in browser-side JavaScript.
4. Add the original survey chart/image files under `assets/images/survey/` and replace the clearly labelled image placeholders in `survey/index.html`. The supplied project ZIP did not include the previous survey graphics.
5. The supplied official SVG logo is already installed at `assets/images/pillsette-logo.svg`. Its oversized transparent canvas has been cropped through the SVG viewBox; no rasterization is used in the website.
6. Confirm the canonical URLs and Open Graph URLs if the production domain changes.

## Preview renders

Open `previews/index.html` for the HTML preview gallery. Full-page desktop and mobile PNG captures for all five page types are in `previews/renders/`. Preview blog posts and supporter names are illustrative examples; the live Jekyll build uses your actual `_posts/` content and `_data/institutions.yml`.

## Loops integration

Use the hosted Loops signup form or a public form endpoint/embed from your Loops workspace. The precise integration depends on the type of Loops form you choose. Never expose a private API key in client-side code.

## GitHub Pages

Enable GitHub Pages for the deployment branch or GitHub Actions workflow. If using a project site rather than the custom domain, set `baseurl` in `_config.yml` to the repository path. The current config is set for `https://pillsette.com`.


### Logo asset

The official supplied vector logo is stored at `assets/images/pillsette-logo.svg`. Its viewBox has been cropped to remove the large transparent margins in the source file. All page templates and previews use this SVG asset.
