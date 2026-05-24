@echo off
echo ========================================
echo 🚀 68 RIDERS - Deployment Script
echo ========================================
echo.

REM Git kontrolü
if not exist .git (
    echo 📦 Git repository başlatılıyor...
    git init
    git add .
    git commit -m "Initial commit - 68 Riders website"
    echo ✅ Git repository oluşturuldu!
) else (
    echo ✅ Git repository mevcut
)

echo.
echo 📋 Deployment seçenekleri:
echo 1. Vercel (Önerilen)
echo 2. Netlify
echo 3. GitHub'a push
echo 4. Local build test
echo.

set /p choice="Seçiminiz (1-4): "

if "%choice%"=="1" goto vercel
if "%choice%"=="2" goto netlify
if "%choice%"=="3" goto github
if "%choice%"=="4" goto build
goto invalid

:vercel
echo.
echo 🔵 Vercel deployment başlatılıyor...
echo.

REM Vercel CLI kontrolü
where vercel >nul 2>nul
if %errorlevel% neq 0 (
    echo 📦 Vercel CLI yükleniyor...
    npm install -g vercel
)

echo 🚀 Vercel'e deploy ediliyor...
vercel --prod

echo.
echo ✅ Deployment tamamlandı!
echo 🌐 Siteniz yayında!
goto end

:netlify
echo.
echo 🟢 Netlify deployment için:
echo 1. https://netlify.com adresine git
echo 2. 'New site from Git' butonuna tıkla
echo 3. GitHub reposunu seç
echo 4. Build command: npm run build
echo 5. Publish directory: .next
echo.

set /p push="GitHub'a push yapmak ister misin? (y/n): "
if /i "%push%"=="y" (
    git add .
    git commit -m "Deploy to Netlify"
    git push
    echo ✅ GitHub'a push edildi!
)
goto end

:github
echo.
echo 📤 GitHub'a push ediliyor...
git add .
set /p message="Commit mesajı: "
git commit -m "%message%"
git push
echo ✅ GitHub'a push edildi!
goto end

:build
echo.
echo 🔨 Local build test başlatılıyor...
npm run build
if %errorlevel% equ 0 (
    echo ✅ Build başarılı! Deploy etmeye hazır.
) else (
    echo ❌ Build hatası! Lütfen hataları düzeltin.
)
goto end

:invalid
echo ❌ Geçersiz seçim!
goto end

:end
echo.
echo 🎉 İşlem tamamlandı!
pause
