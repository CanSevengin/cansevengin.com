---
title: "AI ajanına ayrı hesap açılmalı mı?"
description: "Evet. AI ajanı senin hesabınla değil, kendi hesabıyla çalışmalı. Böylece yetkisini sınırlar, ne yaptığını görür, kolayca kapatırsın. Ama tek başına yetmez."
date: 2026-10-26T08:56:00+03:00
tags: [yapay zeka, AI ajanı, güvenlik, Microsoft 365, otomasyon]
category: ai
lang: tr
draft: false
---

AI ajanına ayrı hesap açılmalı mı? Evet. Ajan e-posta gönderiyorsa, dosya okuyorsa ya da kayıt güncelliyorsa bunu senin kullanıcı adınla değil, kendi kimliğiyle yapmalı. Neye dokunabileceğini ancak böyle sınırlarsın. Ne yaptığını ancak böyle görürsün. Kapatman gerektiğinde de kendini kapının dışında bırakmazsın. Yalnız ayrı hesap işin başı. Ajanı tek başına güvenli yapmaz.

Bu soru bu ay somut hale geldi. Microsoft, Copilot Studio'da kurulan ajanlara Microsoft 365 içinde kendi hesaplarını vermeye başladı. Özellik şimdilik Frontier adlı erken erişim programında, önizleme olarak sunuluyor. İlgili doküman 15 Ekim 2026'da güncellendi. Microsoft kullanmasan bile işine yarayacak kısmı anlatayım.

## Microsoft tam olarak ne yaptı?

Microsoft'un dokümanına göre hesabı olan bir ajanın kendi Microsoft Entra kimliği ve kendi posta kutusu oluyor. Teams'te ve şirket rehberinde görünüyor. Ekip arkadaşları onu bulabiliyor, @ ile etiketleyebiliyor, dağıtım listelerine ekleyebiliyor. Yöneticiler de onu diğer kullanıcılar gibi denetleyebiliyor.

Asıl önemli olan detaylar şunlar:

- **Hesap, yetkileri kendiliğinden vermiyor.** Her araç için erişimi ayrıca tanımlaman gerekiyor. Microsoft da sadece gerekeni vermeni öneriyor.
- **Her ajan için ayrı lisans gerekiyor.** Kurumsal bir Microsoft 365 paketinin üstüne, ajan başına "Frontier for AI Teammates" lisansı. Yani bu henüz küçük işletmelere göre bir özellik değil.
- **Önizleme aşamasında.** Özellikler değişebilir. Ajanın e-posta adresi gibi bazı ayarlar yayımlandıktan sonra değiştirilemiyor.

Microsoft eylülde ayrıca Foundry platformunda kurulan ajanların e-postası, takvimi, OneDrive alanı olan, organizasyon şemasında yer alan tam bir kullanıcı hesabı alacağını anlatmıştı. Gidişat belli: ajanlar artık bir uygulamanın içindeki özellik değil, sistemdeki bir çalışan gibi görünmeye başlıyor.

## AI ajanı neden ayrı hesapla çalışmalı?

Küçük ekiplerin çoğu kolay yoldan başlar. Otomasyon aracını kendi Gmail ya da Outlook hesabına bağlarsın, API anahtarını verirsin, çalışır. Neden böyle yapıldığını anlıyorum. Beş dakika sürüyor.

Sorun sonra çıkıyor:

1. **Kimin ne yaptığını ayıramazsın.** Ajan senin adresinden yanlış bir e-posta atarsa kayıtlarda onu sen göndermiş görünürsün.
2. **Senin erişebildiğin her şeye erişir.** Gelen kutun, dosyaların, ortak klasörler, varsa yönetici yetkilerin. Bir ajanın bunların hepsine neredeyse hiçbir zaman ihtiyacı yoktur.
3. **Kapatmak dert olur.** Erişimi kesmek çoğu zaman kendi şifreni değiştirmek ya da hesabına bağlı başka araçları bozmak demektir.
4. **O kişi gidince ajan da durur.** Ajan tek bir çalışanın hesabıyla çalışıyorsa, o kişi işten ayrıldığı gün iş de durur.

Ayrı bir kimlik dördünü de çözer. Mantık, işe yeni başlayan birine kendi şifreni vermek yerine ona ayrı bir hesap açmakla aynı. Her kimlik sadece ihtiyacı olana erişir, sen de onu rahatça görür ve kaldırırsın. Benzer bir şeyi insanlar için [şifre yöneticisi ve passkey](/tr/blog/password-manager-passkeys/) yazısında anlatmıştım: her hesaba ayrı anahtar, ki bir sızıntı her kapıyı açmasın. Ajanlar da aynı disiplini hak ediyor.

## Ayrı hesap, güvenlik sınırı demek değil

Gözden kaçması kolay olan kısım burası. Microsoft kendi dokümanında bu ajanların, birebir sohbetler dahil, birlikte çalıştığı herkesle **tek bir ortak hafıza** tuttuğunu söylüyor. Birinin ajana anlattığı bir şey, sonra başka biriyle konuşurken karşısına çıkabiliyor. Ajan kişisel bilgileri paylaşmaması yönünde yönlendiriliyor. Ama Microsoft kullanıcılar arasında bir gizlilik sınırı olmadığını açıkça yazıyor. Dosya özetleri, asıl dosyayı açamayan kişilere de gösterilebiliyor. Bu önizlemede bunu kapatma seçeneği yok.

Bu dürüst bir doküman, hakkını vermek lazım. Ama böyle bir ajanı nasıl kullanacağımı değiştiriyor. Bütün ekibin konuştuğu ortak bir ajan, her konuşmayı hatırlayan ama kimsenin sırrını tutamayan bir iş arkadaşı gibi. Ekip içi sık sorulan sorular ya da proje takibi için olur. İK konuları, maaşlar ya da bir müşterinin sana güvenip anlattıkları için olmaz.

## Ajanın hesabını ben olsam nasıl kurardım?

Bunun için Microsoft'un önizlemesine ihtiyacın yok. Aynı kurallar bir Google Workspace kullanıcısı, bir servis hesabı ya da otomasyon aracındaki bir API anahtarı için de geçerli:

- **Her ajana ayrı kimlik.** Birkaç otomasyonu aynı hesapta toplama. Bir şey ters gittiğinde hangisinin yaptığını bilmek istersin.
- **Önce sadece okuma yetkisi.** Çıktısına güvendikçe, yazma yetkisini tek tek ver.
- **Adını açık koy.** Gönderen kısmında bir çalışanın adı yerine "Sipariş Bilgilendirme Ajanı" yazsın. İnsanlar bir yazılımla konuştuğunu bilmeli.
- **Bir sahibi olsun.** Her ajandan bir kişi sorumlu olsun: neye eriştiği, ne kadara mal olduğu, ne zaman kapatılacağı.
- **Hassas bilgiyi ortak ajandan uzak tut.** Hafıza ortaksa, ajanın öğrendiği her şeyin onu kullanan herkese ulaşabileceğini varsay.
- **Yetkileri birkaç ayda bir gözden geçir.** Ajanlar da eski hesaplar gibi zamanla yetki biriktirir.

İşinin gerçekten bir ajana ihtiyacı olup olmadığından emin değilsen önce [AI ajanı nedir](/tr/blog/what-an-ai-agent-actually-is/) yazısına bak. Çoğu iş için adımları belli, sabit bir akış yeter. Onu güvenli tutmak da çok daha kolay.

## Benim görüşüm

Ajanlara ayrı hesap vermek doğru yön. Yapay zekanın yaptığı işi görünür, denetlenebilir ve kolay durdurulur hale getiriyor. Bir yazılımın senin adına iş yapmasına izin vermeden önce zaten istemen gereken şey bu. Ama yeni hesabı ajanın güvenli olduğunun kanıtı saymam. Kimlik sana işi kimin yaptığını söyler. Ajanın neyi bilmesi gerektiğine karar vermez. O karar hâlâ bizde.

## Kaynaklar

- [Microsoft Learn: Give your agent an account (Frontier), 15 Ekim 2026'da güncellendi](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/authoring-agent-account)
- [The New Stack: Microsoft's new Copilot agents get their own email, calendar and a place in the org chart (25 Eylül 2026)](https://thenewstack.io/copilot-agents-identity-runtime/)
