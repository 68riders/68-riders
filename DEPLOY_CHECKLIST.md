# ✅ DEPLOY KONTROL LİSTESİ

## 🎯 DEPLOY ÖNCESİ

### 1. Environment Variables
- [ ] `.env.local` dosyası oluşturuldu
- [ ] `ADMIN_PASSWORD` güçlü bir şifre ile ayarlandı
- [ ] `.env.local.example` dosyası mevcut (template olarak)

### 2. Git Hazırlığı
- [ ] `.gitignore` dosyası mevcut
- [ ] `.env.local` dosyası `.gitignore`'da
- [ ] `node_modules` klasörü `.gitignore`'da

### 3. Build Testi
```bash
npm run build
```
- [ ] Build başarılı (hata yok)
- [ ] Tüm sayfalar compile oldu
- [ ] Warning'ler normal (header export ile ilgili)

### 4. İçerik Kontrolü
- [ ] `public/logo.png` - Logo dosyası mevcut
- [ ] `public/video.mp4` - Video dosyası mevcut
- [ ] `public/favicon.ico` - Favicon mevcut

---

## 🚀 GITHUB'A YÜKLEME

```bash
# Terminal'de proje klasöründe:

# 1. Git başlat
git init

# 2. Tüm dosyaları ekle
git add .

# 3. İlk commit
git commit -m "Initial commit - 68 Riders website"

# 4. GitHub'da yeni repository oluştur
# https://github.com/new
# Repository adı: 68-riders
# Public seç
# README ekleme (zaten var)

# 5. Remote ekle (KULLANICI_ADI'nı değiştir)
git remote add origin https://github.com/KULLANICI_ADI/68-riders.git

# 6. Main branch'e push
git branch -M main
git push -u origin main
```

- [ ] GitHub repository oluşturuldu
- [ ] Kod başarıyla push edildi
- [ ] GitHub'da dosyalar görünüyor

---

## 🌐 VERCEL'E DEPLOY

### 1. Vercel Hesabı
- [ ] https://vercel.com adresine gidildi
- [ ] "Sign Up" tıklandı
- [ ] "Continue with GitHub" seçildi
- [ ] GitHub ile giriş yapıldı

### 2. Proje Import
- [ ] Vercel dashboard'da "Add New" > "Project" tıklandı
- [ ] GitHub repository listesi göründü
- [ ] "68-riders" repository bulundu
- [ ] "Import" butonuna tıklandı

### 3. Proje Ayarları
```
Framework Preset: Next.js ✅ (otomatik gelir)
Root Directory: ./ ✅ (otomatik gelir)
Build Command: npm run build ✅ (otomatik gelir)
Output Directory: .next ✅ (otomatik gelir)
Install Command: npm install ✅ (otomatik gelir)
```
- [ ] Ayarlar otomatik geldi
- [ ] Değişiklik yapılmadı

### 4. Environment Variables (ÖNEMLİ!)
```
Key: ADMIN_PASSWORD
Value: [.env.local'deki şifreniz]
```
- [ ] Environment Variables bölümü bulundu
- [ ] `ADMIN_PASSWORD` eklendi
- [ ] Şifre doğru girildi

### 5. Deploy
- [ ] "Deploy" butonuna tıklandı
- [ ] Deploy süreci başladı
- [ ] 1-2 dakika beklendi
- [ ] ✅ Yeşil tik göründü
- [ ] "Visit" butonuna tıklandı

---

## 🧪 DEPLOY SONRASI TEST

### 1. Ana Sayfa
- [ ] Site açıldı
- [ ] Video oynatılıyor
- [ ] Ses butonu çalışıyor
- [ ] Loading screen göründü
- [ ] Navbar çalışıyor

### 2. Sayfalar
- [ ] Faaliyetler sayfası açılıyor
- [ ] Etkinlik detay sayfası açılıyor
- [ ] Üyeler sayfası açılıyor
- [ ] Üye profil sayfası açılıyor
- [ ] Galeri sayfası açılıyor
- [ ] Hakkımızda sayfası açılıyor
- [ ] İletişim sayfası açılıyor

### 3. Admin Paneli
- [ ] `/admin` sayfası açılıyor
- [ ] Şifre ile giriş yapılabiliyor
- [ ] Dashboard görünüyor
- [ ] Üye ekleme çalışıyor
- [ ] Etkinlik ekleme çalışıyor
- [ ] Galeri ekleme çalışıyor

### 4. Fonksiyonalite
- [ ] Etkinlik detayında fotoğraflar açılıyor
- [ ] Lightbox çalışıyor (önceki/sonraki)
- [ ] Üye profilinde galeri açılıyor
- [ ] Sosyal medya linkleri çalışıyor
- [ ] İletişim formu gönderiliyor

---

## 🌍 DOMAIN BAĞLAMA (OPSİYONEL)

### 1. Vercel'de Domain Ekle
- [ ] Proje sayfasında "Settings" tıklandı
- [ ] "Domains" sekmesi açıldı
- [ ] Domain yazıldı (örn: `68riders.com`)
- [ ] "Add" butonuna tıklandı
- [ ] DNS talimatları göründü

### 2. DNS Ayarları
Domain sağlayıcınızda (GoDaddy, Namecheap, vb.):

**A Record** (Root domain):
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
```
- [ ] A Record eklendi

**CNAME Record** (www):
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```
- [ ] CNAME Record eklendi

### 3. SSL Sertifikası
- [ ] 24-48 saat beklendi (DNS yayılması)
- [ ] Vercel'de "Domains" > "Refresh" tıklandı
- [ ] SSL sertifikası otomatik eklendi
- [ ] Site `https://` ile açılıyor

---

## 🎨 İÇERİK GÜNCELLEMESİ

### 1. Admin Panelinden
- [ ] Gerçek üyeler eklendi
- [ ] Profil fotoğrafları yüklendi
- [ ] Kapak fotoğrafları eklendi
- [ ] Bio'lar yazıldı
- [ ] Sosyal medya linkleri eklendi
- [ ] Gerçek etkinlikler eklendi
- [ ] Etkinlik fotoğrafları yüklendi
- [ ] Rota bilgileri eklendi
- [ ] Tavsiyeler yazıldı
- [ ] Galeri fotoğrafları eklendi
- [ ] Hakkımızda bilgileri güncellendi
- [ ] İletişim bilgileri güncellendi

### 2. Dosya Değişiklikleri
- [ ] `public/logo.png` - Gerçek logo
- [ ] `public/video.mp4` - Gerçek video
- [ ] `public/favicon.ico` - Gerçek favicon

Değişiklik yaptıktan sonra:
```bash
git add .
git commit -m "İçerik güncellendi"
git push
# Vercel otomatik deploy edecek!
```

---

## 📊 ANALİTİK (OPSİYONEL)

### Vercel Analytics
- [ ] Vercel dashboard'da "Analytics" açıldı
- [ ] Ziyaretçi sayıları görüntülendi
- [ ] Sayfa performansı kontrol edildi

### Google Analytics (İsteğe Bağlı)
- [ ] Google Analytics hesabı oluşturuldu
- [ ] Tracking ID alındı
- [ ] `app/layout.tsx`'e eklendi
- [ ] Deploy edildi

---

## 🔒 GÜVENLİK KONTROL

- [ ] Admin şifresi güçlü (min 8 karakter)
- [ ] `.env.local` GitHub'a gitmedi
- [ ] Vercel'de Environment Variables eklendi
- [ ] Admin paneline sadece şifre ile girilebiliyor
- [ ] Rate limiting çalışıyor (5 yanlış deneme = kilit)
- [ ] Session timeout çalışıyor (1 saat)

---

## 🎉 FİNAL KONTROL

### Site Çalışıyor mu?
- [ ] Ana sayfa açılıyor
- [ ] Tüm sayfalar çalışıyor
- [ ] Admin paneli çalışıyor
- [ ] Mobil responsive
- [ ] Hız iyi (< 3 saniye)

### Domain Çalışıyor mu?
- [ ] `https://68riders.com` açılıyor
- [ ] `https://www.68riders.com` açılıyor
- [ ] SSL sertifikası aktif (yeşil kilit)
- [ ] Redirect çalışıyor (www > non-www veya tersi)

### Otomatik Deploy Çalışıyor mu?
```bash
# Test için küçük bir değişiklik yap
git add .
git commit -m "Test deploy"
git push
```
- [ ] GitHub'a push edildi
- [ ] Vercel otomatik deploy başladı
- [ ] Deploy başarılı
- [ ] Değişiklik sitede görünüyor

---

## 📞 SORUN GİDERME

### Build Hatası
```bash
# Local'de test et
npm run build

# Hata varsa düzelt ve tekrar push et
git add .
git commit -m "Build hatası düzeltildi"
git push
```

### Admin Paneli Açılmıyor
1. Vercel'de "Settings" > "Environment Variables" kontrol et
2. `ADMIN_PASSWORD` var mı?
3. Yoksa ekle ve "Redeploy" yap

### Domain Bağlanmıyor
1. DNS ayarlarını kontrol et
2. 24-48 saat bekle (DNS yayılması)
3. Vercel'de "Domains" > "Refresh" tıkla

### Site Yavaş
1. Vercel Analytics'te performans kontrol et
2. Fotoğraf boyutlarını küçült (max 500 KB)
3. Video boyutunu küçült (max 50 MB)

---

## ✅ TAMAMLANDI!

Tüm checkboxlar işaretlendiyse:

🎉 **TEBRİKLER!** 🎉

68 Riders web sitesi artık canlıda ve çalışıyor!

**Site URL**: https://68riders.com (veya Vercel URL'iniz)

---

**Son Güncelleme**: 24 Mayıs 2026  
**Durum**: ✅ Production Ready  
**Hazırlayan**: Kiro AI

🏍️💨 **RIDE BEYOND LIMITS** 🏍️💨
