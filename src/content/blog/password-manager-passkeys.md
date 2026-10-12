---
title: "Should you use a password manager? Yes, and here is how to start with passkeys"
description: "Yes. A password manager lets every account have its own strong password, and passkeys go further. Start with the one built into your phone, then decide."
date: 2026-10-12T10:00:00+03:00
tags: [passwords, passkeys, security, apps]
category: apps
draft: false
---

Yes, you should use a password manager, and the easiest one to start with is probably already on your phone. It remembers a different strong password for every account, so one leaked password no longer opens everything else. Once it is set up, add passkeys wherever a site offers them, because they remove the password from the login altogether.

## Why a password manager beats your memory

The real problem is not weak passwords, it is reused ones. If the same password guards your email, your shopping account and your work tools, a leak at the weakest site hands someone the keys to the rest. The UK's National Cyber Security Centre puts it simply: a password manager stores passwords safely for you, "meaning that you can have unique passwords for each service."

There is a second benefit people miss. A password manager only autofills on the correct website, as the NCSC also points out. If you land on a convincing fake login page and the manager stays silent, that silence is a warning sign. Your brain cannot do that check reliably. Software can.

## Passkeys, explained without the jargon

A passkey is a login that replaces the password. The FIDO Alliance, the industry group behind the standard, describes passkeys as "a password replacement technology" that is "phishing resistant and secure by design."

Here is the simple version of how it works. When you create a passkey, your device makes a pair of keys. One is public and goes to the website. The other is private and stays with you. Apple's security page says it plainly: "The server never learns what the private key is." To sign in, you just unlock your phone or laptop with your face, fingerprint or PIN, the same way you already unlock it.

So there is nothing to type, nothing to forget, and nothing useful for a fake website to steal. That is why I think passkeys are the most underrated upgrade in everyday security right now. Not every site supports them yet, which is why you still need a password manager for the rest.

## Built-in options: probably all you need

If you live mostly inside one ecosystem, the built-in manager is a very good start.

**Apple Passwords.** Since iOS 18, iPadOS 18 and macOS Sequoia, Apple has a separate Passwords app. It stores passwords, passkeys, Wi-Fi passwords and verification codes, so for many sites you do not need SMS codes or a separate authenticator app. You can share passwords and passkeys with family through Shared Groups. Apple says iCloud Keychain is "end-to-end encrypted with strong cryptographic keys not known to Apple." On a Windows PC, iCloud for Windows lets you use those passwords in Chrome or Edge.

**Google Password Manager.** It is built into Chrome and Android and saves both passwords and passkeys to your Google Account. Google says passkeys saved there sync automatically across Windows, macOS, Linux and Android, and that its Password Manager PIN keeps them end-to-end encrypted, so they "can't be accessed by anyone, not even Google." Its Password Checkup flags passwords that are compromised, reused or weak, which is a quick way to find your worst habits.

The NCSC is also clear that saving passwords in your browser is safe on your own devices. The exception is shared computers, where you should never save them.

## When a dedicated manager makes sense

Built-in managers get awkward when you mix worlds: an iPhone with a Windows laptop and Firefox, or a family split between Android and Apple. The NCSC notes that third-party managers help exactly here, since they sync across different browsers and devices.

**Bitwarden** has a free plan with unlimited passwords, unlimited devices and passkey management, and it is open source. Premium, which adds a built-in 2FA code generator and vault health reports, is listed at $19.80 per year.

**1Password** has no free plan, but offers a 14-day trial. Its Individual plan is listed at $3.99 per month billed annually, and Families covers up to 5 people. It can save and use passkeys through its browser extension.

Prices are in USD at the time of writing and change, so check the official pages before paying.

## What I would do this week

1. Pick one manager. If all your devices are Apple or all are Google, use the built-in one. If they are mixed, try Bitwarden's free plan.
2. Protect the manager itself. Use a long, unique main password and turn on two-step verification, as the NCSC advises.
3. Fix email first. Your email account resets everything else, so give it a new unique password or, better, a passkey.
4. Run the health check (Password Checkup on Google, security recommendations in Apple Passwords) and change the reused passwords on banking, shopping and work accounts.
5. Accept passkeys when sites offer them. That is the whole migration plan: slow, boring, and effective.

Keeping your phone on supported software matters here too, because these features arrive through updates. I wrote about that trade-off in [should you upgrade your phone this year](/blog/should-you-upgrade-your-phone-2026/).

You do not need to move a hundred accounts in one evening. Ten important ones this week is already a big step up.

## Sources

- [FIDO Alliance: Passkeys](https://fidoalliance.org/passkeys/)
- [Apple Support: About the security of passkeys](https://support.apple.com/en-us/102195)
- [Apple Support: Use the Passwords app](https://support.apple.com/en-us/120758)
- [Google Account Help: Google Password Manager](https://support.google.com/accounts/answer/6197437)
- [Google Account Help: Password Checkup](https://support.google.com/accounts/answer/9457609)
- [Google: Sync passkeys securely across your devices](https://blog.google/technology/safety-security/google-password-manager-passkeys-update-september-2024/)
- [NCSC: Password managers](https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/password-managers)
- [Bitwarden: Personal plans](https://bitwarden.com/products/personal/)
- [Bitwarden: Pricing](https://bitwarden.com/pricing/)
- [1Password: Sign up and pricing](https://1password.com/sign-up)
- [1Password Support: Save and sign in with passkeys](https://support.1password.com/save-use-passkeys/)
