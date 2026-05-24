# 🚀 Vercel'e Deploy Rehberi (ÖNERİLEN)

## 🎯 Neden Vercel?

- ✅ **Ücretsiz** hosting
- ✅ **Otomatik** deploy (GitHub'a push = canlıya geçer)
- ✅ **Next.js** tam desteği (dynamic routes çalışır)
- ✅ **Hızlı** CDN (dünya çapında)
- ✅ **Kolay** domain bağlama
- ✅ **SSL** sertifikası otomatik

## 📋 Adım 1: GitHub'a Yükle

```bash
# Git başlat
git init

# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "Initial commit - 68 Riders"

# GitHub repository oluştur ve bağla
git remote add origin https://github.com/KULLANICI_ADI/68-riders.git
git branch -M main
git push -u origin main
```

## 🌐 Adım 2: Vercel'e Deploy

### 2.1 Vercel Hesabı Oluştur
1. https://vercel.com adresine git
2. **Sign Up** butonuna tıkla
3. **Continue with GitHub** seç
4. GitHub hesabınla giriş yap

### 2.2 Projeyi Import Et
1. Vercel dashboard'da **Add New** > **Project** tıkla
2. GitHub repository'lerini göreceksin
3. **68-riders** repository'sini bul
4. **Import** butonuna tıkla

### 2.3 Proje Ayarları
```
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build (otomatik gelir)
Output Directory: .next (otomatik gelir)
Install Command: npm install (otomatik gelir)
```

### 2.4 Environment Variables (ÖNEMLİ!)
**Environment Variables** bölümüne:
```
Key: ADMIN_PASSWORD
Value: [güçlü-şifreniz]
```
Ekle ve **Deploy** butonuna tıkla!

## ⏱️ Adım 3: Deploy Bekle

- Deploy süreci 1-2 dakika sürer
- İlerlemeyi canlı izleyebilirsin
- Başarılı olunca ✅ yeşil tik görürsün

## 🎉 Adım 4: Siteniz Hazır!

Vercel otomatik bir URL verecek:
```
https://68-riders.vercel.app
```

veya

```
https://68-riders-kullanici.vercel.app
```

## 🌍 Adım 5: Kendi Domain'inizi Bağlayın

### 5.1 Vercel'de Domain Ekle
1. Proje sayfasında **Settings** > **Domains** git
2. Domain'inizi yazın (örn: `68riders.com`)
3. **Add** butonuna tıkla

### 5.2 DNS Ayarları

Vercel size DNS kayıtlarını gösterecek. Domain sağlayıcınızda (GoDaddy, Namecheap, vb.) şu ayarları yapın:

**A Record** (Root domain için):
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```

**CNAME Record** (www için):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

### 5.3 SSL Sertifikası
- Vercel otomatik SSL sertifikası ekler
- 24-48 saat içinde aktif olur
- Siteniz `https://` ile açılır

## 🔄 Güncelleme Yapmak

Çok basit! Sadece GitHub'a push et:

```bash
# Değişiklikleri ekle
git add .

# Commit yap
git commit -m "Site güncellendi"

# GitHub'a gönder
git push

# Vercel otomatik deploy edecek! 🚀
```

## 📊 Vercel Dashboard

Vercel dashboard'da görebilirsiniz:
- 📈 **Analytics**: Kaç kişi ziyaret etti
- 🚀 **Deployments**: Tüm deploy geçmişi
- 📝 **Logs**: Hata logları
- ⚙️ **Settings**: Proje ayarları

## ⚠️ Önemli Notlar

### 1. Admin Şifresi
- `.env.local` dosyası GitHub'a gitmez (güvenlik)
- Vercel'de **Environment Variables** olarak ekleyin
- Her deploy'da otomatik kullanılır

### 2. Veriler (LocalStorage)
- Tüm veriler tarayıcıda saklanır
- Her kullanıcı kendi verilerini görür
- Sunucuda veri yok

### 3. Otomatik Deploy
- `main` branch'e her push = otomatik deploy
- Preview URL'ler: Her PR için ayrı test URL'i
- Production: main branch

## 🎨 Özelleştirme

### Domain Değiştirme
Vercel'de **Settings** > **Domains** > **Edit**

### Environment Variables Güncelleme
Vercel'de **Settings** > **Environment Variables** > **Edit**

### Build Ayarları
Vercel'de **Settings** > **General** > **Build & Development Settings**

## 🆘 Sorun Giderme

### Build Hatası
1. Vercel'de **Deployments** > Son deploy > **View Function Logs**
2. Hatayı oku
3. Düzelt ve tekrar push et

### Domain Bağlanmıyor
- DNS ayarlarını kontrol et
- 24-48 saat bekle (DNS yayılması)
- Vercel'de **Domains** > **Refresh** tıkla

### Admin Paneli Açılmıyor
- Environment Variables'da `ADMIN_PASSWORD` var mı kontrol et
- Redeploy yap: **Deployments** > **...** > **Redeploy**

## 📞 Destek

- Vercel Docs: https://vercel.com/docs
- Vercel Discord: https://vercel.com/discord
- GitHub Issues: Kendi repo'nuzda issue açın

## ✅ Kontrol Listesi

- [ ] GitHub repository oluşturuldu
- [ ] Kod GitHub'a yüklendi
- [ ] Vercel hesabı oluşturuldu
- [ ] Proje Vercel'e import edildi
- [ ] Environment Variables eklendi (`ADMIN_PASSWORD`)
- [ ] İlk deploy başarılı
- [ ] Site açılıyor (vercel.app URL)
- [ ] Admin paneline giriş yapılıyor
- [ ] Domain bağlandı (opsiyonel)
- [ ] DNS ayarları yapıldı (opsiyonel)
- [ ] SSL aktif (https://)

## 🎉 Tebrikler!

Siteniz artık canlıda ve otomatik deploy sistemi aktif! 

Her kod değişikliğinde sadece `git push` yapın, Vercel gerisini halleder! 🚀

---

**68 Riders - Ride Beyond Limits** 🏍️💨
