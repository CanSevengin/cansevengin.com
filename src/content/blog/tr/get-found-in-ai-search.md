---
title: "Küçük bir marka yapay zeka aramalarında nasıl çıkar?"
description: "Siten taranabilir olsun, arama botlarını engelleme, cevabı ilk satırlarda ver, bilgilerin her yerde aynı olsun. Google'a göre llms.txt gibi hilelere gerek yok."
date: 2026-10-12T10:20:00+03:00
tags: [SEO, yapay zeka araması, KOBİ]
category: marketing
lang: tr
draft: false
---

Küçük bir markanın ya da kişisel sitenin yapay zeka aramalarında çıkması için çoğu zaman düzgün yapılmış klasik SEO yeter. Sayfaların taranıp dizine girebilmeli, cevapları konuyu bilen biri net yazmalı, hakkındaki bilgiler her yerde aynı olmalı. Google, AI Overviews ve AI Mode için ek bir şart ya da özel bir optimizasyon olmadığını açıkça yazıyor. ChatGPT, Claude ve Perplexity tarafında ise bir adım daha var: arama botlarına robots.txt dosyanda izin vermen gerekiyor.

Aşağıda platformların resmi olarak söylediklerini ve benim kişisel görüşlerimi ayrı tutmaya çalıştım.

## Google AI Overviews için ne diyor?

Google Search Central'daki ilgili sayfa kısa. Bir sayfanın AI Overviews veya AI Mode'da kaynak link olarak görünmesi için dizinde olması ve aramada snippet ile gösterilebilir olması yetiyor. Eklemen gereken özel bir schema.org işaretlemesi yok, ek teknik şart da yok. Tabii her arama sonucunda olduğu gibi dizine girmek garanti değil.

Google 2026'da bir adım ileri gidip üretken yapay zeka özellikleri için ayrı bir rehber yayımladı. Ana mesaj şu: bu özellikler aynı sıralama ve kalite sistemleriyle çalışıyor, yani SEO hâlâ geçerli. Rehberin istediği belli: ilk elden deneyim içeren özgün içerik, temiz bir teknik yapı, Google İşletme Profili ve Merchant Center'da güncel bilgi. Boş vermen gereken şeyleri de sıralıyor: llms.txt ve benzeri "AI dosyaları", içeriği küçük parçalara bölmek, sayfaları sırf yapay zeka için yeniden yazmak, sahte bahsedilmeler toplamak ve yapılandırılmış veriye fazla takılmak.

Yani dürüst SEO yapıyorsan sıfırdan başlamıyorsun.

## Arama botlarını engelleme, hangisinin ne yaptığını bil

Bir güvenlik eklentisi ya da CDN ayarı "yapay zeka botlarını" tek kalemde engelliyorsa, sen farkına varmadan cevaplardan düşebilirsin. Her şirketin arama için ve model eğitimi için ayrı botu var. Bunlar ayrı kararlar.

- **Google:** Googlebot, AI Overviews dahil aramayı yönetiyor. Google-Extended ise Gemini eğitimi ve bazı diğer Google ürünleri için ayrı bir izin. Google, Google-Extended'ın aramaya dahil olmayı ve sıralamayı etkilemediğini söylüyor.
- **OpenAI:** OAI-SearchBot siteleri ChatGPT aramasında gösteriyor, GPTBot eğitim için. OpenAI'a göre OAI-SearchBot'u engelleyen siteler ChatGPT arama cevaplarında yer almıyor.
- **Anthropic:** Claude-SearchBot Claude'un arama sonuçları için tarıyor, ClaudeBot model geliştirme için veri topluyor, Claude-User ise kullanıcı sorduğunda sayfayı açıyor. Anthropic, Claude-SearchBot'u engellemenin arama görünürlüğünü düşürebileceğini yazıyor.
- **Perplexity:** PerplexityBot siteleri Perplexity cevaplarında gösterip linkliyor. Dokümanlarına göre eğitim için kullanılmıyor.

Yani istersen eğitimi kapatıp aramayı açık tutabilirsin. robots.txt dosyanı aç, her arama botunu adıyla kontrol et.

## Cevabı ilk satırlarda ver

Bu benim görüşüm, belgelenmiş bir sıralama sinyali değil. Google da içeriği bölmene ya da yapay zeka için yeniden yazmana gerek olmadığını söylüyor. Yine de en işe yarar alışkanlığın bu olduğunu düşünüyorum. Biri "ihracatta distribütör ne iş yapar" ya da "AB'ye kargo nasıl gönderilir" diye sorduğunda, cevabı ilk iki üç cümlede veren sayfaya hem insan daha kolay güveniyor hem de herhangi bir sistem onu daha doğru alıntılıyor.

Pratikte: her sayfada tek bir net soru, cevap en üstte, başlıklar cevap gibi, detaylar aşağıda. Kısacası iyi yazı.

## Yapılandırılmış veri kullan ama mucize bekleme

Google JSON-LD formatını öneriyor ve yapılandırılmış verinin sayfanın anlamı hakkında "açık ipuçları" verdiğini söylüyor. Küçük bir marka için ana sayfaya ya da hakkımızda sayfasına Organization işaretlemesiyle başlardım: ad, logo, iletişim bilgisi ve `sameAs` ile gerçek profillerin. LinkedIn, Instagram, Trendyol ya da Hepsiburada mağaza sayfan buraya girebilir. Blog için Article işaretlemesi yeter.

Dürüst tut. Google, işaretlemenin sayfada görünen içerikle örtüşmesini istiyor ve AI özellikleri için zorunlu olmadığını söylüyor. Makinelerin seni anlamasına yardım eder, sana yer satın almaz.

## Bilgilerin her yerde aynı olsun

Yapay zeka cevapları birçok kaynaktan derleniyor. Şirket adın, adresin, ürün yelpazen ya da unvanın sitende, LinkedIn'de, Google İşletme Profili'nde ve pazaryeri mağazanda farklıysa, her sisteme karışık sinyal gidiyor. Bu kısım benim çıkarımım ama Google'ın işletme bilgilerini güncel tut tavsiyesiyle de örtüşüyor.

Ben olsam marka ya da kendim için kısa bir bilgi kartı yazar, sonra bütün profilleri ona göre düzeltirdim. Sıkıcı bir iş, ama [karşılığını veren sıkıcı işlerden](/tr/blog/boring-ai-wins/).

## llms.txt işe yarıyor mu?

llms.txt, Jeremy Howard'ın 2024'te yayımladığı bir öneri: siteyi dil modelleri için özetleyen bir dosya. Bir standart değil, Google arama sinyali de değil. Google'ın rehberi, aramanın bu tür dosyaları görmezden geldiğini, görünürlüğe ne faydası ne zararı olduğunu söylüyor. Chrome'un Lighthouse aracında llms.txt denetimi var ama dosya yoksa sonuç "uygulanamaz" çıkıyor. Üstelik bu denetim sıralamayla değil, yapay zeka ajanlarının siteyi nasıl kullandığıyla ilgili.

Bence geliştirici dokümanı yayımlıyorsan eklemesi ucuz, kod araçlarına faydası olabilir. Küçük bir marka için o bir saati yukarıdaki adımlara harca.

## Kısa kontrol listesi

1. Önemli sayfaların dizinde mi, Google Search Console'dan bak.
2. robots.txt'de Googlebot, OAI-SearchBot, Claude-SearchBot ve PerplexityBot'a izin ver.
3. Cevabı ilk satırlara koy.
4. Sayfayla örtüşen Organization JSON-LD ekle.
5. Bilgilerini her yerde aynı yap.
6. Sadece senin yazabileceğin şeyi yaz. Bunun yerini hiçbir dosya tutmuyor.

## Kaynaklar

- [Google Search Central: AI özellikleri ve web siten](https://developers.google.com/search/docs/appearance/ai-features)
- [Google Search Central: Üretken yapay zeka özellikleri için optimizasyon rehberi](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Google Search Central: Google'ın genel tarayıcıları (Google-Extended)](https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers)
- [Google Search Central: Yapılandırılmış veriye giriş](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)
- [Google Search Central: Organization yapılandırılmış verisi](https://developers.google.com/search/docs/appearance/structured-data/organization)
- [OpenAI: OpenAI tarayıcıları](https://developers.openai.com/api/docs/bots)
- [Anthropic: Anthropic web'den veri topluyor mu?](https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler)
- [Perplexity: Perplexity tarayıcıları](https://docs.perplexity.ai/guides/bots)
- [llms.txt önerisi](https://llmstxt.org/)
- [Chrome Lighthouse: llms.txt denetimi](https://developer.chrome.com/docs/lighthouse/agentic-browsing/llms-txt)
