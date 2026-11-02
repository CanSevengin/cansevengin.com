---
title: "How to secure a vibe-coded app before you launch"
description: "To secure a vibe-coded app, lock down the database, keep secret keys out of the browser and the repo, give each tool its own key, and test it logged out."
date: 2026-11-02T08:57:00+03:00
tags: [side projects, vibe coding, security, Supabase, AI coding]
category: building
draft: false
---

How do you secure a vibe-coded app before you launch it? Four checks cover most of the risk: make sure the database refuses strangers, keep secret keys out of the browser and out of your repo, give every tool its own key with a spending limit, and open the app logged out to see what a stranger sees. None of this needs a security background. It needs an hour and the willingness to distrust code you didn't write line by line.

I build a small publishing agent on the side, mostly with AI writing the code. I love how fast that is. But the last few weeks were a good reminder that fast and safe are two different jobs, and the AI only reliably does the first one.

## What happened this autumn

Two stories made this concrete for me.

The security firm UpGuard scanned roughly 300,000 domains that showed signs of using Supabase, a popular database backend for AI-built apps. It found 16,326 databases with tables anyone could read, and over half of them showed signs of personal data. TechCrunch reported examples ranging from names and phone numbers to passwords. UpGuard's explanation is the useful part: tables created in Supabase's dashboard now get Row Level Security (RLS) switched on by default, but tables created programmatically through the API do not, and that is exactly how coding agents usually create them.

Then on 21 October, the hosting platform Railway disclosed that an unauthorised third party may have accessed customers' environment variables, the place where apps keep API keys and database passwords. Some may have been decrypted. Railway told every customer to rotate all of those secrets right away.

The first story is about a mistake in the app. The second is about a provider getting hit, which you can't prevent. Both end with the same question: if your keys or your data leaked tomorrow, how bad would it be?

## The four checks I'd run before launch

### 1. Make the database say no to strangers

If your app uses Supabase, check every table in the dashboard and confirm RLS is on. Then check the policies, because RLS with no policy blocks everything, and RLS with a sloppy policy can still let anyone read everything. UpGuard makes the same point: enabling RLS is not enough, it has to be configured correctly.

Pay extra attention to tables your AI tool created, because those are the ones most likely to have slipped through. If you use another backend, the principle is the same. Find out what a request with no login can read or write, and make the answer "nothing it shouldn't."

### 2. Keep secret keys out of the browser and the repo

Supabase's own documentation puts it plainly: never use a secret key in the browser or expose it to customers. The public key is meant to be visible, but only because RLS is supposed to protect the data behind it.

Ask your AI tool to list every key the app uses and where each one lives. Anything secret belongs on the server or in your host's environment settings, never in front-end code. Also check that your `.env` file is in `.gitignore`, and search your git history for keys you may have committed early on. Deleting a key from the latest version of a file does not remove it from history.

### 3. One tool, one key, one limit

This is the lesson from Railway. You can't stop your host from being breached, but you can limit the damage. Give every app and every tool its own API key instead of reusing one master key everywhere. Set a monthly spending limit at the provider where you can. Then, when something leaks, you rotate one key, not all of them, and a stolen key can't run up an unlimited bill.

It's the same idea I wrote about in [giving an AI agent its own account](/blog/ai-agent-own-account/): separate identities are what let you contain a problem and switch it off.

### 4. Look at it like a stranger

Open your app in a private browser window, logged out. Click around. Try the URLs for pages that should need a login. Look at the page source and the network tab in your browser's developer tools and see whether private data is arriving even if it isn't shown on screen. If you can see something you shouldn't, so can everyone else.

## "It's safe" is part of a small v1

When I wrote about [launching a small v1](/blog/ship-small-v1/), one item on my checklist was simply "It's safe." I still believe a rough first version is fine. Plain design, one feature, manual work behind the scenes, all fine. Leaking other people's data is not a rough edge. It's a broken promise.

The good news is that these checks are cheap, and you can ask the same AI that wrote the code to help you run them. Just don't ask it "is my app secure?" and accept a yes. Ask it to show you which tables have RLS, which keys exist, and what a logged-out request returns. Then look for yourself.

## Sources

- [UpGuard: Everything everywhere, systemic data exposure in Supabase apps](https://www.upguard.com/blog/everything-everywhere-systemic-data-exposure-in-supabase-apps)
- [TechCrunch: Some Supabase customers are publicly exposing reams of people's data to the web](https://techcrunch.com/2026/09/25/some-supabase-customers-are-publicly-exposing-reams-of-peoples-data-to-the-web/)
- [Railway: Security disclosure, Wednesday October 21st](https://blog.railway.com/p/security-disclosure-wednesday-october-21st)
- [Supabase docs: Row Level Security](https://www.supabase.com/docs/guides/auth/row-level-security)
