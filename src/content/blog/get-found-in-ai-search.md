---
title: "How do you get found in AI search as a small brand?"
description: "Be indexable, let the right crawlers in, answer clearly and keep your facts the same everywhere. Google says AI search needs no special tricks or llms.txt."
date: 2026-10-12T10:20:00+03:00
tags: [SEO, AI search, small business]
category: marketing
draft: false
---

To get found in AI search, a small brand or personal site mostly needs normal, solid SEO: pages that can be crawled and indexed, clear answers written by someone who knows the subject, and the same facts about you everywhere. Google says plainly that there are no extra requirements or special optimizations for AI Overviews and AI Mode. ChatGPT, Claude and Perplexity add one practical step: their search crawlers must be allowed in your robots.txt.

Below I keep what the platforms document apart from what is my own opinion.

## What Google officially says about AI Overviews and AI Mode

Google's Search Central page on AI features is short. To be shown as a supporting link, a page has to be indexed and eligible to appear in Search with a snippet. There is no special schema.org markup to add and no extra technical requirement. Indexing is still not guaranteed, as with any Google result.

In 2026 Google published a dedicated guide to its generative AI features. The message: they run on the same core ranking and quality systems, so SEO still applies. It asks for original content with first-hand perspective, a clean technical setup, and current data in Google Business Profile and Merchant Center. It also lists what you can ignore: llms.txt and other "AI files", chunking content, rewriting pages just for AI, chasing inauthentic mentions, and overfocusing on structured data. If you have been doing honest SEO, you are not starting over.

## Let the search crawlers in, and know which is which

A security plugin or CDN setting that blocks "AI bots" as one group can quietly remove you from AI answers. Each company runs separate bots for search and for training, and those are different decisions.

- **Google:** Googlebot controls Search, including AI Overviews. Google-Extended is a separate token for Gemini training and grounding in some other Google products. Google says Google-Extended does not affect inclusion or ranking in Google Search.
- **OpenAI:** OAI-SearchBot surfaces sites in ChatGPT search. GPTBot is for training. OpenAI says sites that block OAI-SearchBot will not be shown in ChatGPT search answers.
- **Anthropic:** Claude-SearchBot indexes for Claude's search results, ClaudeBot collects data for model development, and Claude-User fetches a page when a user asks. Anthropic says blocking Claude-SearchBot may reduce your visibility in its search results.
- **Perplexity:** PerplexityBot surfaces and links sites in Perplexity answers and, per its docs, is not used for training.

So you can block training and still allow search, if that is what you want. Open your robots.txt and check each search bot by name.

## Answer the question in the first lines

This one is my opinion, not a documented ranking signal, and Google explicitly says you don't need to chunk or rewrite for AI. I still think answering early is the single most useful habit. When someone asks "what is an export distributor" or "how do I ship to the EU", the page that states the answer in its first two or three sentences is easier for a person to trust and easier for any system to quote correctly.

In practice: one clear question per page, the answer at the top, headings that read like answers, details below. That is just good writing.

## Use structured data, but don't expect magic

Google recommends JSON-LD and says structured data gives "explicit clues about the meaning of a page". For a small brand I would start with Organization markup on the home or about page: name, logo, contact details, and `sameAs` links to your real profiles (LinkedIn, marketplace stores, social accounts). For a blog, Article markup is enough.

Keep it honest: Google wants markup to match what is visible on the page, and says it is not required for AI features. It helps machines understand you. It does not buy you a spot.

## Keep your facts consistent everywhere

AI answers are assembled from many sources. If your company name, address, product range or job title differ across your site, LinkedIn, Google Business Profile and marketplace listings, every system gets mixed signals. This part is my reasoning, but it lines up with Google's advice to keep business data current.

What I'd do: write one short fact sheet about the brand or yourself, then update every profile to match it. Boring work, but it is the kind of [boring work that pays off](/blog/boring-ai-wins/).

## What about llms.txt?

llms.txt is a proposal by Jeremy Howard, first published in 2024, for a file that summarizes a site for language models. It is not a standard and it is not a Google Search signal. Google's AI guide says Search ignores such files and they will neither help nor harm your visibility. Chrome's Lighthouse does have an llms.txt audit in its agentic browsing category, but a missing file is marked "not applicable", and the audit is about how AI agents use a site, not about rankings.

My view: for developer docs it is cheap and may help coding tools. For a small brand, spend that hour on the steps above.

## A short checklist

1. Confirm key pages are indexed in Google Search Console.
2. Allow Googlebot, OAI-SearchBot, Claude-SearchBot and PerplexityBot in robots.txt.
3. Put the answer in the first lines.
4. Add Organization JSON-LD that matches the page.
5. Make your facts identical everywhere.
6. Write what only you can write. No file or markup replaces that.

## Sources

- [Google Search Central: AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google Search Central: Guide to optimizing for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google Search Central: Google's common crawlers (Google-Extended)](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers)
- [Google Search Central: Introduction to structured data](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Google Search Central: Organization structured data](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [OpenAI: Overview of OpenAI crawlers](https://developers.openai.com/api/docs/bots)
- [Anthropic: Does Anthropic crawl data from the web?](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)
- [Perplexity: Perplexity crawlers](https://docs.perplexity.ai/guides/bots)
- [llms.txt proposal](https://llmstxt.org/)
- [Chrome Lighthouse: llms.txt audit](https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt)
