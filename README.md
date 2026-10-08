# cansevengin.com

Personal site and blog of Can Sevengin. Built with [Astro](https://astro.build), deployed on Vercel.

## Run locally

```bash
npm install
npm run dev
```

## Writing a post

Add a Markdown file to `src/content/blog/`. The file name becomes the URL (`my-post.md` → `/blog/my-post/`).

```md
---
title: "Post title"
description: "One or two sentences shown in lists and search results."
date: 2026-10-08T10:00:00+03:00
tags: [AI, automation]
draft: true
---

Post body in Markdown.
```

## Publishing flow (draft → approval → live)

- New posts are added with `draft: true` on a separate branch and opened as a pull request.
- Vercel builds a **preview deploy** for the pull request. Drafts are visible there (and in `npm run dev`), marked with a "Draft" label.
- After approval, `draft` is set to `false` and the pull request is merged into `main`. Vercel publishes it to production automatically.
- Production never shows drafts.

## Config

Site name, email and LinkedIn URL live in `src/site.ts`.

## Writing rules

- English, professional, plain language. No hype.
- No em dashes between clauses.
- No invented statistics, quotes or client stories. Facts that matter get checked against a source.

<!-- Review branch for the 5 launch posts. Merge to publish after approval. -->
