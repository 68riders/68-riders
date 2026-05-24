# 🚀 GitHub Pages'e Deploy Rehberi

## 📋 Ön Hazırlık

Projeniz GitHub Pages için hazır! Aşağıdaki adımları takip edin.

## 🔧 Adım 1: GitHub Repository Oluşturma

1. **GitHub'a gidin**: https://github.com
2. **Yeni repository oluşturun**:
   - Repository adı: `68-riders` (veya istediğiniz isim)
   - Public seçin (GitHub Pages için gerekli)
   - README eklemeyin (zaten var)

## 📤 Adım 2: Projeyi GitHub'a Yükleme

Proje klasöründe terminal açın ve şu komutları çalıştırın:

```bash
# Git başlat
git init

# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "Initial commit - 68 Riders website"

# GitHub repository'nizi bağlayın (REPO_URL'i kendi linkinizle değiştirin)
git remote add origin https://github.com/KULLANICI_ADI/68-riders.git

# Main branch'e push edin
git branch -M main
git push -u origin main
```

## ⚙️ Adım 3: GitHub Pages Ayarları

1. **Repository'nize gidin** (GitHub'da)
2. **Settings** sekmesine tıklayın
3. Sol menüden **Pages** seçin
4. **Source** bölümünde:
   - **GitHub Actions** seçin
5. **Save** butonuna tıklayın

## 🎯 Adım 4: Otomatik Deploy

Artık her `main` branch'e push yaptığınızda:
- GitHub Actions otomatik çalışacak
- Projeniz build edilecek
- GitHub Pages'e deploy edilecek

**Deploy durumunu kontrol edin**:
- Repository'nizde **Actions** sekmesine gidin
- "Deploy to GitHub Pages" workflow'unu görün
- Yeşil ✓ işareti başarılı deploy anlamına gelir

## 🌐 Adım 5: Domain Bağlama (Opsiyonel)

Kendi domain'iniz varsa:

### GitHub Tarafında:
1. **Settings > Pages** bölümüne gidin
2. **Custom domain** alanına domain'inizi yazın (örn: `68riders.com`)
3. **Save** butonuna tıklayın
4. **Enforce HTTPS** seçeneğini aktif edin

### Domain Sağlayıcınızda:
DNS ayarlarına gidin ve şu kayıtları ekleyin:

**A Records** (Root domain için - 68riders.com):
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record** (www için - www.68riders.com):
```
KULLANICI_ADI.github.io
```

**Örnek DNS Ayarları**:
```
Type    Name    Value                   TTL
A       @       185.199.108.153         3600
A       @       185.199.109.153         3600
A       @       185.199.110.153         3600
A       @       185.199.111.153         3600
CNAME   www     kullanici.github.io     3600
```

## 🔍 Site URL'niz

Deploy tamamlandıktan sonra siteniz şu adreste yayında olacak:

**GitHub Pages URL**:
```
https://KULLANICI_ADI.github.io/68-riders/
```

**Özel Domain** (ayarladıysanız):
```
https://68riders.com
```

## 🛠️ Güncelleme Yapmak

Sitenizde değişiklik yaptığınızda:

```bash
# Değişiklikleri ekle
git add .

# Commit yap
git commit -m "Site güncellendi"

# GitHub'a gönder
git push

# Otomatik deploy başlayacak!
```

## ⚠️ Önemli Notlar

### 1. Admin Panel Şifresi
`.env.local` dosyası GitHub'a gitmez (güvenlik için). Admin paneli şifreniz:
- Tarayıcınızın localStorage'ında saklanır
- Her tarayıcıda ayrı ayrı giriş yapmanız gerekir

### 2. Veriler
Tüm veriler (üyeler, etkinlikler, galeri) tarayıcının localStorage'ında saklanır:
- Her kullanıcı kendi verilerini görür
- Sunucu tarafında veri yok
- Tarayıcı önbelleği temizlenirse veriler kaybolur

### 3. İlk Kurulum
Site ilk açıldığında örnek veriler yüklenecek. Admin panelinden:
- Gerçek üyeleri ekleyin
- Gerçek etkinlikleri ekleyin
- Gerçek galeri fotoğraflarını ekleyin

## 🎨 Özelleştirme

### Repo Adı Değiştirdiyseniz
`next.config.mjs` dosyasında:
```javascript
basePath: '/repo-adi',  // Bu satırı uncomment edin ve repo adınızı yazın
```

### Renkler
`tailwind.config.ts` dosyasında renkleri değiştirebilirsiniz.

### Logo
`public/logo.png` dosyasını değiştirin.

## 📞 Sorun mu Yaşıyorsunuz?

### Build Hatası
```bash
npm run build
```
Komutu ile local'de test edin.

### Deploy Başarısız
- **Actions** sekmesinde hata loglarını kontrol edin
- `package.json` ve `next.config.mjs` dosyalarını kontrol edin

### Site Açılmıyor
- DNS ayarlarının yayılması 24-48 saat sürebilir
- GitHub Pages'in aktif olduğundan emin olun (Settings > Pages)

## ✅ Kontrol Listesi

- [ ] GitHub repository oluşturuldu
- [ ] Kod GitHub'a yüklendi
- [ ] GitHub Pages aktif edildi
- [ ] GitHub Actions çalıştı (yeşil ✓)
- [ ] Site açılıyor
- [ ] Admin paneline giriş yapılıyor
- [ ] Tüm sayfalar çalışıyor
- [ ] Domain bağlandı (opsiyonel)
- [ ] HTTPS aktif

## 🎉 Tebrikler!

Siteniz artık canlıda! 68 Riders ailesi internette! 🏍️💨
