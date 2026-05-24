# 🔒 Güvenlik Rehberi

## Admin Panel Güvenliği

### 1. Şifre Değiştirme (ÖNEMLİ!)

#### Local Development:
```bash
# .env.local dosyasını düzenle
NEXT_PUBLIC_ADMIN_PASSWORD=yeni_guclu_sifren_123
```

#### Vercel'de:
1. **Project Settings** → **Environment Variables**
2. `NEXT_PUBLIC_ADMIN_PASSWORD` ekle
3. Value: `yeni_guclu_sifren_123`
4. **Save**
5. **Redeploy** (otomatik olabilir)

#### Netlify'da:
1. **Site settings** → **Environment variables**
2. `NEXT_PUBLIC_ADMIN_PASSWORD` ekle
3. Value: `yeni_guclu_sifren_123`
4. **Save**
5. **Trigger deploy**

---

## 🔐 Güçlü Şifre Önerileri

### ✅ İyi Şifreler:
- `68Riders!2026@Secure`
- `MotoBike#Admin$2026`
- `Rider@68!Strong#Pass`

### ❌ Kötü Şifreler:
- `123456`
- `password`
- `68riders` (çok basit)

### Şifre Kuralları:
- En az 12 karakter
- Büyük + küçük harf
- Rakam
- Özel karakter (!@#$%^&*)

---

## 🛡️ Güvenlik Katmanları

### 1. Environment Variables ✅
```javascript
// Şifre kodda görünmez
const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;
```

### 2. Session Storage ✅
```javascript
// Tarayıcı kapanınca oturum kapanır
sessionStorage.setItem("admin_authenticated", "true");
```

### 3. HTTPS ✅
- Vercel/Netlify otomatik SSL sağlar
- Tüm trafik şifreli

---

## 🚨 Güvenlik Kontrol Listesi

### Deploy Öncesi:
- [ ] `.env.local` dosyası `.gitignore`'da
- [ ] Şifre environment variable'dan geliyor
- [ ] Kodda hardcoded şifre yok
- [ ] Session storage çalışıyor

### Deploy Sonrası:
- [ ] HTTPS aktif (🔒 ikonu)
- [ ] Admin şifresi değiştirildi
- [ ] Test edildi (login/logout)
- [ ] Şifre kimseyle paylaşılmadı

---

## 🔧 Gelişmiş Güvenlik (İsteğe Bağlı)

### 1. Rate Limiting
```javascript
// Çok fazla deneme engelleme
let loginAttempts = 0;
const MAX_ATTEMPTS = 5;

if (loginAttempts >= MAX_ATTEMPTS) {
  alert("Çok fazla deneme! 5 dakika bekleyin.");
  return;
}
```

### 2. IP Whitelist
```javascript
// Sadece belirli IP'lerden erişim
const allowedIPs = ["123.456.789.0"];
```

### 3. Two-Factor Authentication (2FA)
- Google Authenticator
- SMS kodu
- Email doğrulama

### 4. Backend Authentication
- NextAuth.js
- Firebase Auth
- Supabase Auth

---

## 📊 Güvenlik Seviyeleri

### Mevcut Seviye: ⭐⭐⭐ (İyi)
- ✅ Environment variables
- ✅ Session storage
- ✅ HTTPS
- ✅ Password protection

### Gelişmiş Seviye: ⭐⭐⭐⭐⭐ (Mükemmel)
- ✅ Yukarıdakiler +
- ✅ Rate limiting
- ✅ 2FA
- ✅ Backend auth
- ✅ Audit logs

---

## 🐛 Güvenlik Sorunları

### Sorun: Şifre GitHub'da görünüyor
**Çözüm:**
```bash
# .env.local'i .gitignore'a ekle
echo ".env.local" >> .gitignore

# Git history'den sil
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch .env.local" \
  --prune-empty --tag-name-filter cat -- --all
```

### Sorun: Herkes admin paneline erişebiliyor
**Çözüm:**
- Şifreyi değiştir
- Session storage kontrol et
- HTTPS kullan

### Sorun: Şifre çok basit
**Çözüm:**
- Güçlü şifre oluştur (12+ karakter)
- Özel karakterler ekle
- Düzenli değiştir

---

## 📝 Best Practices

### 1. Şifre Yönetimi
- ✅ Environment variables kullan
- ✅ Güçlü şifre seç
- ✅ Düzenli değiştir (3-6 ayda bir)
- ❌ Kodda hardcode etme
- ❌ GitHub'a commit etme

### 2. Access Control
- ✅ Sadece güvenilir kişilere ver
- ✅ Session timeout kullan
- ✅ Logout butonu ekle
- ❌ Şifreyi paylaşma
- ❌ Public yerlerde giriş yapma

### 3. Monitoring
- ✅ Login denemelerini logla
- ✅ Başarısız girişleri takip et
- ✅ Düzenli güvenlik kontrolü
- ❌ Şüpheli aktiviteyi görmezden gelme

---

## 🔗 Faydalı Kaynaklar

- **OWASP Top 10:** https://owasp.org/www-project-top-ten/
- **NextAuth.js:** https://next-auth.js.org/
- **Vercel Security:** https://vercel.com/docs/security
- **Password Generator:** https://passwordsgenerator.net/

---

## 📞 Güvenlik Sorunu mu Var?

Güvenlik açığı bulduysanız:
1. **Hemen şifreyi değiştir**
2. **Tüm oturumları kapat**
3. **Logları kontrol et**
4. **Gerekirse siteyi kapat**

---

## ✅ Güvenlik Checklist

### Günlük:
- [ ] Şüpheli aktivite kontrolü
- [ ] Login logları

### Haftalık:
- [ ] Güvenlik güncellemeleri
- [ ] Dependency updates

### Aylık:
- [ ] Şifre değiştirme
- [ ] Güvenlik audit
- [ ] Backup kontrolü

---

**Güvenlik her zaman öncelik! 🔒**
