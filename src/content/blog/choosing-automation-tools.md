---
title: "n8n, Zapier or code? How I choose for small teams"
description: "A practical way to pick an automation stack based on who will maintain it, not on feature lists."
date: 2026-10-08T07:00:00+03:00
tags: [automation, n8n, tools]
draft: false
---

People often ask me which automation tool is "the best." The honest answer is that the tool matters less than one question most comparisons ignore: who is going to fix it when it breaks?

Every automation breaks eventually. An API changes, a password expires, a supplier sends a file in a new format. The right stack is the one the people around you can repair without calling for help.

## The three options, as I see them

### Zapier, Make and similar

Visual, hosted, very fast to start. A non-technical person can build and understand a simple flow in an afternoon, and there are ready-made connections to almost every common tool.

**Choose it when:** the flows are simple, the volume is modest, and the person maintaining them is not technical. The cost of the subscription is usually much smaller than the cost of someone's time.

**Watch out for:** pricing that grows with every task or step, and complex logic that becomes hard to read once a flow has dozens of steps.

### n8n

Also visual, but more flexible. You can self-host it or use the cloud version, mix visual steps with small pieces of code, and build longer, branching workflows with AI steps inside. It's what I reach for most often with clients.

**Choose it when:** the workflows are getting complex, you want AI steps and real branching, volume is growing, or you want more control over where your data lives.

**Watch out for:** it rewards a bit of technical comfort. If self-hosted, someone has to own updates and backups.

### Custom code

Scripts, small services, or an app built for one job. Maximum control and often the cheapest to run at scale.

**Choose it when:** you have a developer who will stay involved, the logic is genuinely unusual, or the automation is part of your product rather than your operations.

**Watch out for:** the "bus factor." If the one person who wrote it leaves, the automation becomes a black box.

## My default path

For most small companies I recommend the same progression:

1. Start with the simplest visual tool that can do the job, so the team learns what automation feels like.
2. Move to n8n when flows get long, need AI in the middle, or the bill starts to hurt.
3. Write code only for the parts that are truly special, and keep them small and documented.

## The checklist that matters more than the tool

Whatever you pick, every automation should have:

- **An owner**, by name.
- **A failure alert** that reaches a human, not just a log nobody reads.
- **A one-paragraph description** of what it does and what it touches.
- **A manual fallback**, so the business keeps running when it's down.

Teams that have those four things do well with almost any tool. Teams that don't will struggle with all of them.
