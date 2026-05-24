# 🚀 GitHub'a Yükleme Rehberi

## Adım 1: Git Başlat

```bash
# Proje klasöründe terminal aç
cd "D:\68 RİDERS ROOT"

# Git başlat
git init

# Dosyaları ekle
git add .

# İlk commit
git commit -m "Initial commit - 68 Riders website"
```

---

## Adım 2: GitHub'da Repo Oluştur

### Yöntem 1: Web Üzerinden (Kolay)

1. **https://github.com/new** adresine git
2. **Repository name:** `68-riders`
3. **Description:** `68 Riders Motosiklet Kulübü Web Sitesi`
4. **Public** veya **Private** seç
5. ❌ **Initialize with README** işaretleme (zaten var)
6. **Create repository** butonuna tıkla

### Yöntem 2: GitHub CLI (İleri Seviye)

```bash
# GitHub CLI yükle: https://cli.github.com/
gh repo create 68-riders --public --source=. --remote=origin --push
```

---

## Adım 3: Remote Ekle ve Push Et

```bash
# Remote ekle (KULLANICI_ADIN'i değiştir!)
git remote add origin https://github.com/KULLANICI_ADIN/68-riders.git

# Branch adını main yap
git branch -M main

# GitHub'a push et
git push -u origin main
```

### Şifre İsterse:

**Personal Access Token oluştur:**
1. GitHub → **Settings** → **Developer settings**
2. **Personal access tokens** → **Tokens (classic)**
3. **Generate new token**
4. Scope: `repo` seç
5. Token'ı kopyala
6. Git push yaparken şifre yerine token'ı kullan

---

## Adım 4: Vercel'e Deploy

### Otomatik Deploy (Önerilen)

1. **https://vercel.com** → Sign up (GitHub ile)
2. **New Project**
3. **Import Git Repository** → `68-riders` seç
4. **Environment Variables** ekle:
   ```
   NEXT_PUBLIC_ADMIN_PASSWORD=yeni_guclu_sifren
   ```
5. **Deploy** butonuna tıkla
6. ✅ **Bitti!** 2-3 dakikada yayında

### Manuel Deploy

```bash
# Vercel CLI yükle
npm install -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

---

## Adım 5: Environment Variables Ayarla

### Vercel'de:

1. **Project Settings** → **Environment Variables**
2. Ekle:
   ```
   NEXT_PUBLIC_ADMIN_PASSWORD = yeni_guclu_sifren_123
   ```
3. **Save**
4. **Redeploy** (otomatik)

### Netlify'da:

1. **Site settings** → **Environment variables**
2. Aynı değişkenleri ekle
3. **Trigger deploy**

---

## 🔒 Güvenlik Kontrolleri

### ✅ Yapılması Gerekenler:

```bash
# 1. .env.local'in .gitignore'da olduğunu kontrol et
cat .gitignore | grep .env.local

# 2. Şifrenin kodda olmadığını kontrol et
grep -r "68riders2026" app/

# 3. Git history'yi kontrol et
git log --oneline

# 4. Remote'u kontrol et
git remote -v
```

### ❌ GitHub'a Gitmemesi Gerekenler:

- `.env.local` (şifreler)
- `node_modules/` (bağımlılıklar)
- `.next/` (build dosyaları)
- `*.log` (log dosyaları)

---

## 📊 Sonraki Adımlar

### 1. Branch Protection

```bash
# Main branch'i koru
# GitHub → Settings → Branches → Add rule
# Branch name: main
# ✅ Require pull request reviews
# ✅ Require status checks
```

### 2. GitHub Actions (CI/CD)

`.github/workflows/deploy.yml` oluştur:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run build
```

### 3. README Badge Ekle

```markdown
![Deploy](https://github.com/KULLANICI_ADIN/68-riders/workflows/Deploy/badge.svg)
![Vercel](https://vercelbadge.vercel.app/api/KULLANICI_ADIN/68-riders)
```

---

## 🐛 Sorun Giderme

### Sorun: Git push reddedildi

```bash
# Force push (DİKKAT: Sadece ilk push'ta!)
git push -f origin main
```

### Sorun: Remote already exists

```bash
# Remote'u sil ve yeniden ekle
git remote remove origin
git remote add origin https://github.com/KULLANICI_ADIN/68-riders.git
```

### Sorun: Authentication failed

```bash
# Personal Access Token kullan
# Şifre yerine token'ı gir
# Veya SSH kullan:
git remote set-url origin git@github.com:KULLANICI_ADIN/68-riders.git
```

### Sorun: .env.local GitHub'a gitti

```bash
# Hemen sil!
git rm --cached .env.local
git commit -m "Remove .env.local"
git push

# History'den tamamen sil
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch .env.local" \
  --prune-empty --tag-name-filter cat -- --all

git push --force --all
```

---

## 📝 Git Komutları Cheat Sheet

```bash
# Status kontrol
git status

# Değişiklikleri ekle
git add .

# Commit yap
git commit -m "Mesaj"

# Push et
git push

# Pull et (güncellemeleri al)
git pull

# Branch oluştur
git checkout -b yeni-branch

# Branch değiştir
git checkout main

# Merge yap
git merge yeni-branch

# Log görüntüle
git log --oneline

# Değişiklikleri geri al
git reset --hard HEAD

# Son commit'i geri al
git reset --soft HEAD~1
```

---

## 🎯 Workflow Önerisi

### Günlük Çalışma:

```bash
# 1. Güncellemeleri al
git pull

# 2. Değişiklik yap
# ... kod yaz ...

# 3. Commit et
git add .
git commit -m "Feature: Yeni özellik eklendi"

# 4. Push et
git push

# ✅ Vercel otomatik deploy eder!
```

### Feature Geliştirme:

```bash
# 1. Yeni branch oluştur
git checkout -b feature/yeni-ozellik

# 2. Değişiklik yap
# ... kod yaz ...

# 3. Commit et
git add .
git commit -m "Feature: Yeni özellik"

# 4. Push et
git push -u origin feature/yeni-ozellik

# 5. GitHub'da Pull Request aç
# 6. Review sonrası merge et
```

---

## 🔗 Faydalı Linkler

- **Git Docs:** https://git-scm.com/doc
- **GitHub Guides:** https://guides.github.com/
- **Vercel Git Integration:** https://vercel.com/docs/git
- **Git Cheat Sheet:** https://education.github.com/git-cheat-sheet-education.pdf

---

## ✅ Checklist

### İlk Setup:
- [ ] Git başlatıldı
- [ ] GitHub repo oluşturuldu
- [ ] Remote eklendi
- [ ] İlk push yapıldı
- [ ] .env.local .gitignore'da
- [ ] Vercel'e deploy edildi
- [ ] Environment variables ayarlandı
- [ ] Admin şifresi değiştirildi

### Her Deploy:
- [ ] Local test yapıldı
- [ ] Commit mesajı anlamlı
- [ ] Push yapıldı
- [ ] Vercel deploy başarılı
- [ ] Site test edildi
- [ ] Admin panel çalışıyor

---

**Başarılar! GitHub'da görüşürüz! 🚀**
