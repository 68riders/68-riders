@echo off
echo ========================================
echo 🚀 GitHub Setup - 68 Riders
echo ========================================
echo.

REM Git kontrolü
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ Git yüklü değil!
    echo 📥 Git'i yükle: https://git-scm.com/download/win
    pause
    exit /b 1
)

echo ✅ Git yüklü
echo.

REM Git başlat
if not exist .git (
    echo 📦 Git repository başlatılıyor...
    git init
    echo ✅ Git başlatıldı!
) else (
    echo ✅ Git repository mevcut
)

echo.
echo 📋 Adımlar:
echo.
echo 1. GitHub'da yeni repo oluştur
echo    URL: https://github.com/new
echo    Repo adı: 68-riders
echo.
echo 2. Repo URL'ini gir (örn: https://github.com/kullanici/68-riders.git)
echo.

set /p repo_url="GitHub Repo URL: "

if "%repo_url%"=="" (
    echo ❌ URL girilmedi!
    pause
    exit /b 1
)

echo.
echo 📤 GitHub'a yükleniyor...
echo.

REM Remote kontrol
git remote | findstr origin >nul 2>nul
if %errorlevel% equ 0 (
    echo ⚠️  Remote zaten mevcut, güncelleniyor...
    git remote remove origin
)

REM Remote ekle
git remote add origin %repo_url%

REM Dosyaları ekle
echo 📁 Dosyalar ekleniyor...
git add .

REM Commit
echo 💾 Commit yapılıyor...
git commit -m "Initial commit - 68 Riders website"

REM Branch
echo 🌿 Branch ayarlanıyor...
git branch -M main

REM Push
echo 🚀 GitHub'a push ediliyor...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo ✅ Başarıyla GitHub'a yüklendi!
    echo ========================================
    echo.
    echo 📊 Sonraki adımlar:
    echo.
    echo 1. Vercel'e deploy et:
    echo    https://vercel.com/new
    echo.
    echo 2. Environment variables ekle:
    echo    NEXT_PUBLIC_ADMIN_PASSWORD=yeni_sifren
    echo.
    echo 3. Admin şifresini değiştir!
    echo.
    echo 🔗 GitHub Repo: %repo_url%
    echo.
) else (
    echo.
    echo ❌ Push başarısız!
    echo.
    echo 💡 Çözümler:
    echo 1. GitHub'da repo oluşturduğundan emin ol
    echo 2. URL'yi kontrol et
    echo 3. Personal Access Token kullan (şifre yerine)
    echo.
    echo 📖 Detaylı rehber: GITHUB_SETUP.md
    echo.
)

pause
