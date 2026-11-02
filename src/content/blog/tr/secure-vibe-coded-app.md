---
title: "Vibe coding ile yapılan uygulama nasıl güvenli hale getirilir?"
description: "Vibe coding ile yaptığın uygulamayı yayına almadan önce veritabanını kilitle, gizli anahtarları tarayıcıdan ve repodan uzak tut, her araca ayrı anahtar ver."
date: 2026-11-02T08:57:00+03:00
tags: [yan proje, vibe coding, güvenlik, Supabase, yapay zeka ile kodlama]
category: building
lang: tr
draft: false
---

Vibe coding ile yaptığın bir uygulamayı yayına almadan önce güvenli hale getirmek için dört kontrol yeter. Veritabanı yabancıya kapalı mı, bak. Gizli anahtarları tarayıcıdan ve repodan çıkar. Her araca ayrı anahtar ve harcama limiti ver. Sonra uygulamayı oturum açmadan aç ve bir yabancının ne gördüğüne bak. Bunun için güvenlik uzmanı olman gerekmiyor. Bir saatin ve satır satır yazmadığın koda biraz şüpheyle bakman yeterli.

Boş zamanlarımda küçük bir yayın ajanı geliştiriyorum. Kodun çoğunu yapay zeka yazıyor. Bu hızı çok seviyorum. Ama son haftalar bana şunu hatırlattı: Hızlı yapmak ayrı iş, güvenli yapmak ayrı iş. Yapay zeka birincisinde iyi, ikincisinde ona güvenemezsin.

## Bu sonbahar ne oldu?

İki haber konuyu somutlaştırdı.

Güvenlik şirketi UpGuard, Supabase kullandığına dair iz taşıyan yaklaşık 300 bin alan adını taradı. Supabase, yapay zekayla yapılan uygulamalarda çok kullanılan bir veritabanı altyapısı. Sonuç: 16.326 veritabanında tablolar herkese açık okunabiliyordu ve bunların yarısından fazlasında kişisel veri izleri vardı. TechCrunch'ın aktardığı örneklerde isimden telefon numarasına, hatta şifrelere kadar bilgi var. Asıl önemli kısım UpGuard'ın açıklaması. Supabase panelinden oluşturulan tablolarda Row Level Security (RLS, satır düzeyinde güvenlik) artık varsayılan olarak açık geliyor. API üzerinden kodla oluşturulan tablolarda ise açık gelmiyor. Kodlama ajanları da tabloları genelde tam bu yolla oluşturuyor.

21 Ekim'de de barındırma platformu Railway bir açıklama yaptı. Yetkisiz bir üçüncü taraf, müşterilerin ortam değişkenlerine erişmiş olabilirmiş. Uygulamalar API anahtarlarını ve veritabanı şifrelerini genelde burada tutuyor. Bir kısmının şifresi de çözülmüş olabilir. Railway bütün müşterilerine bu anahtarların hepsini hemen yenilemelerini söyledi.

İlk haberde hata uygulamanın kendisinde. İkincisinde ise saldırıya uğrayan sağlayıcı ve bunu sen engelleyemezsin. İkisi de aynı soruya çıkıyor: Yarın anahtarların ya da verilerin sızsa, zarar ne kadar büyük olur?

## Yayından önce yaptığım dört kontrol

### 1. Veritabanı yabancıya kapıyı açmasın

Supabase kullanıyorsan paneldeki bütün tablolara tek tek bak, RLS açık mı kontrol et. Sonra kurallara (policy) bak. Kuralı olmayan RLS her şeyi engeller. Özensiz yazılmış bir kural ise yine herkesin her şeyi okumasına izin verebilir. UpGuard da aynı şeyi söylüyor: RLS'yi açmak yetmiyor, doğru ayarlaman gerekiyor.

Yapay zeka aracının oluşturduğu tablolara ayrıca dikkat et. Gözden kaçanlar genelde onlar. Başka bir altyapı kullanıyorsan da mantık değişmiyor. Oturum açmamış biri ne okuyabiliyor, ne yazabiliyor, bunu öğren. Cevap "hiçbir şey" olmalı, ya da en azından "görmesi gereken kadar".

### 2. Gizli anahtarlar tarayıcıya ve repoya girmesin

Supabase'in kendi dokümantasyonu bunu açıkça yazıyor: Gizli anahtarı (secret key) asla tarayıcıda kullanma, kullanıcıya gösterme. Herkese açık anahtarın görünmesinde sorun yok. Ama bu, arkadaki veriyi RLS koruyor diye böyle.

Yapay zeka aracından uygulamadaki bütün anahtarları ve her birinin nerede durduğunu listelemesini iste. Gizli olan her şey sunucuda ya da barındırma servisinin ortam değişkenlerinde durmalı. Ön yüz koduna girmemeli. `.env` dosyan `.gitignore` içinde mi, ona da bak. Bir de git geçmişini tara. Projenin ilk günlerinde yanlışlıkla bir anahtar commit etmiş olabilirsin. Dosyanın son halinden silmek, geçmişten silmek demek değil.

### 3. Her araca ayrı anahtar, ayrı limit

Railway olayının dersi bu. Barındırma servisinin hacklenmesini engelleyemezsin ama zararı küçültebilirsin. Her yerde aynı ana anahtarı kullanma. Her uygulamaya ve her araca ayrı bir API anahtarı ver. Sağlayıcı izin veriyorsa aylık harcama limiti koy. Bir şey sızarsa hepsini değil, sadece o anahtarı yenilersin. Çalınan anahtar da sınırsız fatura çıkaramaz.

[AI ajanına ayrı hesap açılmalı mı](/tr/blog/ai-agent-own-account/) yazısında anlattığım fikir de buydu: Kimlikleri ayırırsan sorunu sınırlar, gerektiğinde kapatırsın.

### 4. Uygulamana bir yabancı gözüyle bak

Uygulamanı gizli sekmede, oturum açmadan aç. Biraz gez. Giriş gerektirmesi gereken sayfaların adreslerini doğrudan yazmayı dene. Tarayıcının geliştirici araçlarında sayfa kaynağına ve ağ (network) sekmesine bak. Ekranda görünmese bile özel veri tarayıcıya geliyor mu, kontrol et. Sen görebiliyorsan herkes görebilir.

## "Güvenli" olmak küçük bir v1'in parçası

[Küçük bir v1 ile çıkmak](/tr/blog/ship-small-v1/) üzerine yazdığımda listemdeki maddelerden biri sadece "Güvenli olsun" idi. İlk sürümün pürüzlü olmasında hâlâ sorun görmüyorum. Sade tasarım, tek özellik, arkada elle yapılan işler, hepsi olur. Başkalarının verisini sızdırmak ise pürüz değil. Tutulmamış bir söz.

İyi haber şu: Bu kontroller ucuz. Kodu yazan yapay zekadan bunları yapmanda yardım da isteyebilirsin. Yalnız "uygulamam güvenli mi?" diye sorup gelen "evet" ile yetinme. Hangi tablolarda RLS açık, hangi anahtarlar var, oturum açmamış bir istek ne döndürüyor, bunları göstermesini iste. Sonra bir de kendin bak.

## Kaynaklar

- [UpGuard: Everything everywhere, systemic data exposure in Supabase apps](https://www.upguard.com/blog/everything-everywhere-systemic-data-exposure-in-supabase-apps)
- [TechCrunch: Some Supabase customers are publicly exposing reams of people's data to the web](https://techcrunch.com/2026/09/25/some-supabase-customers-are-publicly-exposing-reams-of-peoples-data-to-the-web/)
- [Railway: Security disclosure, Wednesday October 21st](https://blog.railway.com/p/security-disclosure-wednesday-october-21st)
- [Supabase dokümantasyonu: Row Level Security](https://www.supabase.com/docs/guides/auth/row-level-security)
