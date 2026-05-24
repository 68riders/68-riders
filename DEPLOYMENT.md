# 🚀 Deployment Rehberi

## Vercel ile Deploy (Önerilen)

### 1. GitHub'a Yükle

```bash
# Git başlat (eğer yoksa)
git init

# Dosyaları ekle
git add .

# Commit yap
git commit -m "Initial commit - 68 Riders website"

# GitHub'a push et
git remote add origin https://github.com/KULLANICI_ADIN/68-riders.git
git branch -M main
git push -u origin main
```

### 2. Vercel'e Deploy

#### Yöntem 1: Vercel Dashboard (Kolay)

1. **https://vercel.com** adresine git
2. **Sign Up** ile GitHub hesabınla giriş yap
3. **New Project** butonuna tıkla
4. GitHub reposunu seç (68-riders)
5. **Deploy** butonuna tıkla
6. ✅ **Bitti!** 2-3 dakikada yayında!

#### Yöntem 2: Vercel CLI (Terminal)

```bash
# Vercel CLI'yi yükle
npm install -g vercel

# Login ol
vercel login

# Deploy et
vercel

# Production'a deploy et
vercel --prod
```

### 3. Custom Domain Ekle (İsteğe Bağlı)

1. Vercel Dashboard'da projeye git
2. **Settings** → **Domains**
3. Domain adını ekle (örn: 68riders.com)
4. DNS ayarlarını güncelle

---

## Netlify ile Deploy

### 1. GitHub'a Yükle (yukarıdaki gibi)

### 2. Netlify'a Deploy

1. **https://netlify.com** adresine git
2. **Sign Up** ile GitHub hesabınla giriş yap
3. **New site from Git** butonuna tıkla
4. GitHub reposunu seç
5. Build ayarları:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
6. **Deploy site** butonuna tıkla

---

## Environment Variables (Eğer EmailJS kullanıyorsan)

### Vercel'de:
1. **Settings** → **Environment Variables**
2. Ekle:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

### Netlify'da:
1. **Site settings** → **Environment variables**
2. Aynı değişkenleri ekle

---

## 🎉 Deploy Sonrası

### Vercel URL'in:
```
https://68-riders.vercel.app
```

### Netlify URL'in:
```
https://68-riders.netlify.app
```

### Custom Domain:
```
https://68riders.com
```

---

## 📝 Notlar

- ✅ Her GitHub push'ta otomatik deploy olur
- ✅ SSL sertifikası otomatik
- ✅ CDN ile hızlı yükleme
- ✅ Sınırsız bandwidth (Vercel)
- ✅ Preview deployments (branch'ler için)

---

## 🐛 Sorun Giderme

### Build hatası alıyorsan:

```bash
# Local'de test et
npm run build

# Hataları düzelt
npm run lint
```

### Port hatası:

```bash
# .env.local oluştur
echo "PORT=3000" > .env.local
```

---

## 🔗 Faydalı Linkler

- **Vercel Docs:** https://vercel.com/docs
- **Netlify Docs:** https://docs.netlify.com
- **Next.js Deployment:** https://nextjs.org/docs/deployment

---

## 💡 İpuçları

1. **Branch Protection:** Main branch'i koru
2. **Preview Deployments:** Her PR için otomatik preview
3. **Analytics:** Vercel Analytics ekle (ücretsiz)
4. **Performance:** Lighthouse score'unu kontrol et
5. **SEO:** Meta tags'leri güncelle

---

## 🎯 Sonraki Adımlar

1. ✅ Deploy et
2. ✅ Custom domain ekle
3. ✅ Google Analytics ekle
4. ✅ SEO optimizasyonu yap
5. ✅ Social media paylaş!

**Başarılar! 🏍️**
